let originalImage;
let blurredImage;
let bodyPose, bodyDetections = [];
let handPose, video, detections = [];
let handPoseOptions = { maxHands: 1, flipped: false };
let indexFingerTip, thumbTip = null;
let isViewMode, isZoomInMode, isFindMode = false;
let viewRegionSize = 100;

function preload() {
  originalImage = loadImage("3women-v2.jpg");
  handPose = ml5.handPose(handPoseOptions);
  bodyPose = ml5.bodyPose();
}

function setup() {
  createCanvas(400, 558);
  video = createCapture(VIDEO);
  video.size(width, height/2);
  video.hide();
  
  handPose.detectStart(video, gotResults);
  bodyPose.detectStart(originalImage, gotBodyResults);
}

function gotResults(results) {
  detections = results;
  
  if (detections.length > 0) {
    let hand = detections[0];
    indexFingerTip = hand.keypoints[8];
    thumbTip = hand.keypoints[4];
  } else {
    indexFingerTip = null;
    thumbTip = null;
  }
}

function gotBodyResults(results) {
  bodyDetections = results;
}

function draw() {
  image(video, 0, 0, width, height/2);
  
  if (isViewMode) {
    handleViewMode();
  }
  else if (isZoomInMode) {
    handleZoomInMode();
  }
  else if (isFindMode) {
    handleFindMode();
  }
  else 
    image(originalImage, 0, height/2, width, height/2);
  
  if (detections && detections.length > 0) {
    drawHandKeypoints(detections);
  }
  
  drawIndexFingerTracker();
  
  if(isZoomInMode)
    drawThumbTracker();
  
  fill(0, 150);
  noStroke();
  textSize(16);
  textAlign(LEFT, TOP);
  
  if (isViewMode) 
    text("View Image Mode", 10, height/2 + 10);
  else if (isZoomInMode) 
    text("Zoom-in Mode", 10, height/2 + 10);
  else if (isFindMode) 
    text("Find Persons Mode", 10, height/2 + 10);
}

function keyReleased() {
  if (key === 'v' || key === 'V') {
    isViewMode = !isViewMode;
    isZoomInMode = false;
    isFindMode = false;
    blurredImage = null;
  }
  
  if (key === 'z' || key === 'Z') {
    isZoomInMode = !isZoomInMode;
    isViewMode = false;
    isFindMode = false;
  }
  
  if (key === 'p' || key === 'P') {
    isFindMode = !isFindMode;
    isViewMode = false;
    isZoomInMode = false;
  }
  
  if (key === 'e' || key === 'E') {
    isViewMode = false;
    isZoomInMode = false;
    isFindMode = false;
  }
}

function drawHandKeypoints(detections) {
  noStroke();
  fill(255, 0, 0);
  for (let detection of detections) {
    for (let keypoint of detection.keypoints) {
      if (keypoint.y < height/2)
        circle(keypoint.x, keypoint.y, 10);
    }
  }
}

function drawIndexFingerTracker() {
  if (indexFingerTip && indexFingerTip.y < height/2) {
    noStroke();
    fill(0, 255, 0);
    circle(indexFingerTip.x, indexFingerTip.y, 15);
    
    let imageY = indexFingerTip.y + height/2;
    fill(0, 255, 0);
    circle(indexFingerTip.x, imageY, 15);
  }
}

function drawThumbTracker() {
  if (thumbTip && thumbTip.y < height/2) {
    noStroke();
    fill(0, 255, 0);
    circle(thumbTip.x, thumbTip.y, 15);
    
    let imageY = thumbTip.y + height/2;
    fill(0, 255, 0);
    circle(thumbTip.x, imageY, 15);
  }
}

function handleViewMode() {
  if (!blurredImage) {
    blurredImage = createGraphics(width, height/2);
    blurredImage.image(originalImage, 0, 0, width, height/2);
    blurredImage.filter(BLUR, 10);
  }

  image(blurredImage, 0, height/2, width, height/2);

  if (indexFingerTip && indexFingerTip.y < height/2) {
    let imageX = indexFingerTip.x;
    let imageY = indexFingerTip.y + height/2;

    let sourceX = constrain(imageX - viewRegionSize/2, 0, width - viewRegionSize);
    let sourceY = constrain(imageY - viewRegionSize/2, height/2, height - viewRegionSize/2);
    
    noFill();
    strokeWeight(2);
    stroke(255, 255, 0);
    rect(sourceX, sourceY, viewRegionSize, viewRegionSize);

    image(
      originalImage, 
      sourceX, sourceY, 
      viewRegionSize, viewRegionSize, 
      sourceX, sourceY - height/2, 
      viewRegionSize, viewRegionSize
    );
  }
}

function handleZoomInMode() {
  image(originalImage, 0, height/2, width, height/2);
  
  if (thumbTip && indexFingerTip) {
    let minX = min(thumbTip.x, indexFingerTip.x);
    let maxX = max(thumbTip.x, indexFingerTip.x);
    let minY = min(thumbTip.y, indexFingerTip.y) + height/2;
    let maxY = max(thumbTip.y, indexFingerTip.y) + height/2;
    
    let regionWidth = maxX - minX;
    let regionHeight = maxY - minY;
    
    minX = constrain(minX, 0, width - regionWidth);
    minY = constrain(minY, height/2, height - regionHeight);
    
    let zoomedMinX = minX + regionWidth / 4;
    let zoomedMinY = minY + regionHeight / 4;
    
    let zoomedRegionWidth = regionWidth / 2;
    let zoomedRegionHeight = regionHeight / 2;
    
    noFill();
    strokeWeight(2);
    stroke(255, 255, 0);
    rect(minX, minY, regionWidth, regionHeight);
    
    image(
      originalImage, 
      minX, minY, 
      regionWidth, regionHeight, 
      zoomedMinX, zoomedMinY - height/2, 
      zoomedRegionWidth, zoomedRegionHeight
    );
  } 
}

function handleFindMode() {
  image(originalImage, 0, height/2, width, height/2);
  
  if (bodyDetections && bodyDetections.length > 0 && indexFingerTip) {
    let normalizedX = floor((indexFingerTip.x / width) * originalImage.width);
    let normalizedY = floor((indexFingerTip.y / (height/2)) * originalImage.height);
    let selectedPerson = bodyDetections.find(person => {
      const box = person.box;
      return normalizedX >= box.xMin && 
             normalizedX <= box.xMax && 
             normalizedY >= box.yMin && 
             normalizedY <= box.yMax;
    });

    if (selectedPerson) {
      const box = selectedPerson.box;
      
      let zoomFactor = 1.1;
      let centerX = (box.xMin + box.xMax) / 2;
      let centerY = (box.yMin + box.yMax) / 2;
      
      let newWidth = box.width * zoomFactor;
      let newHeight = box.height * zoomFactor;
      
      let newXMin = centerX - newWidth / 2;
      let newYMin = centerY - newHeight / 2;
      
      let constrainedXMin = constrain(newXMin, 0, originalImage.width - newWidth);
      let constrainedYMin = constrain(newYMin, 0, originalImage.height - newHeight);
      
      image(
        originalImage,
        constrainedXMin, constrainedYMin + height/2,
        newWidth, newHeight,
        box.xMin, box.yMin,
        box.width, box.height
      );
    }
  }
}