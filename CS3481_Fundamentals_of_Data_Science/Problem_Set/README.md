# Problem Set

This contains some problems that I think are important. Some problems are designed by me. It is not the format of any midterm or final exam. Please be careful to use it if there are any mistakes.

## Problem 1

What is the main advantage and limitation of using pre-pruning to enhance generalization error?

## Problem 2

How are the entries in a confusion matrix defined for a two-class classification problem? What are the two main measures for summarizing the information in a confusion matrix, and how are they defined?

## Problem 3
   
With following data points: (6, -4), (5, 3), (8, -2), (0, -11), (2, 5),
(3, -6)

(a) Calculate the covariance matrix of this set of data points.

(b) Calculate the correlation coefficient between the two attributes.

## Problem 4

How is the gain ratio defined for decision tree? Why this measure is used for attribute selection?

## Problem 5

Suppose a decision tree is to be constructed to predict whether the air pollution level in a city is high, moderate, or low based on the following attributes: the industrial activity level (INDUSTRY), the number of green spaces (GREEN_SPACES), and whether the city has vehicle restrictions (RESTRICTIONS). The following table shows the corresponding attribute values for ten cities.

| City | INDUSTRY | GREEN_SPACES | RESTRICTIONS | Air pollution level |
|------|----------|--------------|--------------|---------------------|
| 1    | High     | High         | No           | Moderate            |
| 2    | High     | High         | Yes          | Low                 |
| 3    | High     | Low          | No           | Moderate            |
| 4    | High     | Low          | Yes          | Low                 |
| 5    | Medium   | High         | No           | Moderate            |
| 6    | Medium   | Low          | No           | High                |
| 7    | Medium   | Low          | Yes          | Low                 |
| 8    | Low      | High         | No           | Moderate            |
| 9    | Low      | High         | Yes          | Low                 |
| 10   | Low      | Low          | No           | High                |

(a) Which attribute will be first chosen according to the information gain measure?

(b) Complete the construction of the tree so that all the above records are classified correctly. Show the structure of the final tree.

## Problem 6

We consider the following set of data records: 
   
| Record | $R$      | $S$       | $T$      | Class |
|--------|----------|-----------|----------|-------|
| 1      | Low      | Medium    | False    | Low   |
| 2      | High     | Low       | False    | High  |
| 3      | Average  | Medium    | True     | High  |
| 4      | High     | High      | True     | Low   |
| 5      | Average  | High      | True     | Low   |
| 6      | Low      | Medium    | True     | Low   |
| 7      | High     | Low       | True     | High  |
| 8      | Average  | Low       | False    | Low   |

Using the naïve Bayes approach, calculate the posterior probabilities of the classes **High** and **Low** given a test example $(R=\text{Average}, S=\text{Medium}, T=\text{False})$.

## Problem 7

Use a Bayesian classifier to model the probabilistic relationship between the attributes $X_1, X_2$, and the class label of the following set of data records.

| Record | $X_1$     | $X_2$     | Class |
|--------|-----------|-----------|-------|
| 1      | 18.2      | 15.8      | -     |
| 2      | 6.2       | 6.4       | +     |
| 3      | 12.4      | 13.6      | -     |
| 4      | 5.0       | 7.6       | +     |
| 5      | 4.8       | 3.0       | +     |
| 6      | 6.8       | 3.8       | +     |
| 7      | 16.4      | 17.2      | -     |
| 8      | 11.8      | 11.0      | -     |
| 9      | 1.2       | 0.8       | +     |
| 10     | 13.4      | 14.2      | -     |
| 11     | 20.2      | 17.0      | -     |

(a) For each class, calculate the sample mean and variance of $X_1$ and $X_2$.

(b) Given a test example $(X_1=10.9, X_2=9.1)$, use the naïve Bayes approach to predict the class label of the test example. 
- i.e. Use Gaussian distribution to represent the class-conditional probability for each attributes

## Problem 8

Perform association analysis on the following set of transaction data:

| Transaction ID | Items            |
|----------------|------------------|
| 1              | {a, c, d}        |
| 2              | {a, c, d, e}     |
| 3              | {b, d, e}        |
| 4              | {a, d, e}        |
| 5              | {a, d}           |
| 6              | {a, b, c, d}     |
| 7              | {b, c, d, e}     |
| 8              | {a, b, c, d, e}  |
| 9              | {a, b, d, e}     |

Using the Apriori algorithm, find all the frequent itemsets if the support threshold is 40%.

## Problem 9

Suppose $Y$ is an itemset and $X$ is a subset of $Y$. If a rule $X \to Y - X$ does not satisfy the confidence threshold, show that any rule $X' \to Y - X'$ where $X'$ is a subset of $X$, will also not satisfy the confidence threshold.

## Problem 10

Given six data points P(4,1), Q(1,3), R(2,5), S(8,5), T(7,3), U(9,2), V(3,4), and W(6,7), use the K-means clustering algorithm with Euclidean distance to group them into two clusters, where Q(1,3) and T(7,3) are the initial centroids.  Use the K-means algorithm to find the two clusters and their respective centroids after the second iteration.

## Problem 11

What is (i) an interval attribute and (ii) a ratio attribute?

## Problem 12

State one main advantage and one main problem of using the embedded approach for feature subset selection.

## Problem 13

Describe two main advantages of performing discretization.

## Problem 14

What are the two common properties of different impurity measures.

## Problem 15

What is the main advantage and the main disadvantage of adopting a k-fold cross-validation when Evaluating a classifier?