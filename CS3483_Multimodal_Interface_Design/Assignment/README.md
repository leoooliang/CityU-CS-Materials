# CS3483 Assignment

## Overview

In the assignment, you are required to use the ml5.js Handpose and BodyPose models to develop an interface for viewing and interacting with an image. These actions are performed by using finger tip detection and keyboard operations.

## Detailed Requirement

### 1. Initial Setup

- Create a display window.

- Load and display an image in the window.

- The instant view of the camera should be displayed next to the image and has the same size as the image.

### 2. Index finger tip detection

A small circle should be drawn on the camera view to indicate the position of the detected index finger tip. When you move your index finger in front of the camera, the circle should keep following your finger tip. A corresponding position indicator should also be drawn on the image to follow the movement of your index finger tip.

### 3. Viewing the image

When the **‘v’** key is pressed and released, the interface should enter the **view image** mode. In this mode, a blurred version of the image should be displayed. When your index finger tip is moving in the camera view, a rectangular area around the position indicator in the blurred image should display the corresponding region from the original image without blurring. When the position indicator moves away, the blurred appearance of the image region should be restored.

### 4. Performing zoom-in on the image

When the **‘z’** key is pressed and released, the interface should enter the **zoom-in** mode. In this mode, the original image should be displayed, and two position indicators, with one corresponding to the thumb tip and one corresponding to the index finger tip, should be drawn on the image. A zoom-in operation should be performed on the image around the mid-point between these two position indicators. The degree of zoom-in is to be specified in proportion to the distance between the tips of your thumb and index finger.

### 5. Finding persons

When the **‘p’** key is pressed and released, the interface should enter the **find persons** mode. In this mode, the original image should be displayed. When your index finger is moving across the camera view and the corresponding position indicator is pointing at a person on the image, the person on the image should be displayed at a slightly larger size at the same position. When the position indicator moves away, the original size of the person should be restored.

### 6. Exiting the view image/zoom-in/find persons mode

When the **‘e’** key is pressed and released, the interface should exit from the **view image/zoom-in/find persons** mode, and the original image should be re-displayed.

## Assignment Submission

- Program (40%)
  - You should submit your [p5.js program](https://github.com/leoooliang/CityU-CS-Materials/blob/main/CS3483_Multimodal_Interface_Design/Assignment/sketch.js) and the associated [image file](https://github.com/leoooliang/CityU-CS-Materials/blob/main/CS3483_Multimodal_Interface_Design/Assignment/3women-v2.jpg).

- Report (60%)
  - You should summarize your work in the form of a [report](https://github.com/leoooliang/CityU-CS-Materials/blob/main/CS3483_Multimodal_Interface_Design/Assignment/CS3483_ASM_Report.pdf) which should include:

    1. A description of the design of the different sections of your program.
   
    2. Screen captures of the output.
   
    3. Limitations and possible improvements of the program.