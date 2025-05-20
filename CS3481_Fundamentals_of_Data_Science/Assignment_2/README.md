# Assignment 2: Random Forest and Naive Bayes Classifier

In this assignment, you will implement different predictive modeling approaches based on the random forest classifier and naïve Bayes classifier using Python, and submit a [report](https://github.com/leoooliang/CityU-CS-Materials/blob/main/CS3481_Fundamentals_of_Data_Science/Assignment_2/CS3481_Random_Forest_and_Naive_Bayes_Classifier_ASM_Report.pdf).

## Detailed Requirement

Random forest is an ensemble predictive modeling approach which combines multiple
decision trees, with each tree modeling a different aspect of the data set. Specifically, each component tree is constructed by sampling the original training set with replacement to create a new training set, based on which the tree structure is determined. In addition, a random subset of attributes, instead of the complete set of attributes, is used for evaluating the best attribute for splitting the data records at each node.

In this assignment, you will implement and evaluate different predictive modeling
approaches using the Wine data set in Assignment 1.

## Submission

You should submit a report to summarize your work. The following tasks are to be performed:

a. Construct random forest models using different numbers of component trees based on a specific training set/test set partition, and analyze the resulting change in classification performance. (25%)

b. For the random forest model corresponding to the best classification performance, select different component decision trees in the model, and compare the classification performances of these trees with that of the original random forest model. (25%)

c. For a random forest classifier (or one of its component trees), the relative importance of the attributes can be measured through the feature_importances_ field of the classifier. For selected component trees in (b), compare their associated lists of relative attribute importance values. (25%)

d. Construct a naïve Bayes classifier model based on our data set, and compare the classification performance with that of the random forest model. (25%) 

Please provide a detailed description of the results of the above tasks in your report.