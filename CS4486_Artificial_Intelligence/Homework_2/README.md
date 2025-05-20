# Homework 2
## Problem 1 (25 points)

Which of the following are valid (necessarily true) sentences?

1. $(\exists x\space x=x) \rightarrow (\forall y \exists z \space y=z)$
   
2. $\forall x (P(x) \vee \neg P(x))$
   
3. $\forall x (\operatorname{Smart}(x) \vee (x=x))$

## Problem 2 (25 points)

For each of the following statements, either prove it is true or give a counterexample.

1. If $P(a \mid b, c) = P(b \mid a, c)$, then $P(a \mid c) = P(b \mid c)$
   
2. If $P(a \mid b, c) = P(a)$, then $P(b \mid c) = P(b)$
   
3. If $P(a \mid b) = P(a)$, then $P(a \mid b, c) = P(a \mid c)$
   

## Problem 3 (25 points)

Construct a decision list to classify the data below. Select tests to be as small as possible (in terms of attributes), breaking ties among tests with the same number of attributes by selecting the one that classifies the greatest number of examples correctly. If multiple tests have the same number of attributes and classify the same number of examples, then break the tie using attributes with lower index numbers (e.g., select $A_1$ over $A_2$).

| Example | $A_1$ | $A_2$ | $A_3$ | $A_4$ | $y$ |
|---------|-------|-------|-------|-------|-----|
| $x_1$   | 1     | 0     | 0     | 0     | 1   |
| $x_2$   | 1     | 0     | 1     | 1     | 1   |
| $x_3$   | 0     | 1     | 0     | 0     | 1   |
| $x_4$   | 0     | 1     | 1     | 0     | 0   |
| $x_5$   | 1     | 1     | 0     | 1     | 1   |
| $x_6$   | 0     | 1     | 0     | 1     | 0   |
| $x_7$   | 0     | 0     | 1     | 1     | 1   |
| $x_8$   | 0     | 0     | 1     | 0     | 0   |

## Problem 4 (25 points)

Suppose you had a neural network with linear activation functions. That is, for each unit the output is some constant $c$ times the weighted sum of the inputs.

1. Assume that the network has one hidden layer. For a given assignment to the weights $w$, write down equations for the value of the units in the output layer as a function of the input layer $x$, without any explicit mention of the output of the hidden layer. Show that there is a network with no hidden units that computes the same function.

2. Repeat the calculation in part $(a)$, but this time do it for a network with any number of hidden layers.

3. Suppose a network with one hidden layer and linear activation functions has $n$ input and output nodes and $h$ hidden nodes. What effect does the transformation in part $(a)$ have on the total number of weights? Discuss in particular the case $h \ll n$.

## Solutions

### Solution of Problem 1

1. **It is valid.** For $\exists x \space x=x$, it is true since there must exist $x$ such that $x$ equals itself if $x$ is not empty. For $\forall y \exists z \space y=z$, it is also true since there must exist $z$ such that $y=z$ for every $y$. Since both sides are always true, $(\exists x \space x=x) \rightarrow (\forall y \exists z \space y=z)$ is always true.

2. **It is valid.** For all $x$, either $P(x)$ is true or $\neg P(x)$ is true, since $\neg P(x)$ is always the opposite of $P(x)$. Therefore, $P(x) \vee \neg P(x)$ is true for all $x$, and $\forall x (P(x) \vee \neg P(x))$ is always true.

3. **It is valid.** Since $x=x$ is always true, $\operatorname{Smart}(x) \vee (x=x)$ is also true for all $x$. Therefore, the disjunction is always true.

### Solution of Problem 2

1. **The statement is true.**

   $$
   \begin{aligned}
   & P(a \mid b, c) = \frac{P(a, b \mid c)}{P(b \mid c)} \implies P(a, b \mid c) = P(a \mid b, c) P(b \mid c) \\
   & P(b \mid a, c) = \frac{P(a, b \mid c)}{P(a \mid c)} \implies P(a, b \mid c) = P(b \mid a, c) P(a \mid c)
   \end{aligned}
   $$

   We have,

   $$ P(a \mid b, c) P(b \mid c) = P(b \mid a, c) P(a \mid c) $$

   If $P(a \mid b, c) = P(b \mid a, c)$, the statement reduces to $P(a \mid c) = P(b \mid c)$.

2. **The statement is false.** $P(a \mid b, c) = P(a)$ means $a$ is independent of both $b$ and $c$. But $b$ and $c$ can still be dependent with each other. If $b$ and $c$ are still dependent, $P(b \mid c)$ is not equal to $P(b)$.

3. **The statement is false.** Let $a$ be "car accident occurs", $b$ be "raining", and $c$ be "slippery road". If $P(a \mid b) = P(a)$, car accidents ($a$) and rain ($b$) are independent. When roads are not slippery ($c=0$), rain ($b$) has no effect on car accidents ($a$). In this case, $P(a \mid b, c=0) = P(a \mid c=0)$. But when roads are slippery ($c=1$), rain ($b$) makes accidents ($a$) more likely because wet roads are hazardous. In this case, $P(a \mid b, c=1) > P(a \mid c=1)$. It shows that $P(a \mid b, c) = P(a \mid c)$ is not always true.

### Solution of Problem 3

Considering the first rule:

- If $A_1=1$, it classifies $x_1$, $x_2$, and $x_5$ with $y=1$, and no examples with $y=0$.
- If $A_1=0$, it classifies $x_3$ and $x_7$ with $y=1$, and $x_4$, $x_6$, and $x_8$ with $y=0$.
- If $A_2=1$, it classifies $x_3$ and $x_5$ with $y=1$, and $x_4$ and $x_6$ with $y=0$.
- If $A_2=0$, it classifies $x_1$, $x_2$, and $x_7$ with $y=1$, and $x_8$ with $y=0$.
- If $A_3=1$, it classifies $x_2$ and $x_7$ with $y=1$, and $x_4$ and $x_8$ with $y=0$.
- If $A_3=0$, it classifies $x_1$, $x_3$, and $x_5$ with $y=1$, and $x_6$ with $y=0$.
- If $A_4=1$, it classifies $x_2$, $x_5$, and $x_7$ with $y=1$, and $x_6$ with $y=0$.
- If $A_4=0$, it classifies $x_1$ and $x_3$ with $y=1$, and $x_4$ and $x_8$ with $y=0$.

We choose "If $A_1=1$, then $y=1$" as the first rule, since $A_1=1$ can classify all 3 examples as $y=1$ with no misclassifications.

After applying the first rule, remaining examples are $x_3$, $x_4$, $x_6$, $x_7$, and $x_8$.

Considering the second rule:

- If $A_2=1$, it classifies $x_3$ with $y=1$, and $x_4$ and $x_6$ with $y=0$.
- If $A_2=0$, it classifies $x_7$ with $y=1$, and $x_8$ with $y=0$.
- If $A_3=1$, it classifies $x_7$ with $y=1$, and $x_4$ and $x_8$ with $y=0$.
- If $A_3=0$, it classifies $x_3$ with $y=1$, and $x_6$ with $y=0$.
- If $A_4=1$, it classifies $x_7$ with $y=1$, and $x_6$ with $y=0$.
- If $A_4=0$, it classifies $x_3$ with $y=1$, and $x_4$ and $x_8$ with $y=0$.

We choose "If $A_2=1$, then $y=0$" as the second rule, since $A_2=1$ can classify 2 examples as $y=0$ with only one misclassification ($y=1$) with the lower index number.

After applying the second rule, remaining examples are $x_7$ and $x_8$.

Considering the third rule:

- If $A_3=1$, it classifies $x_7$ with $y=1$, and $x_8$ with $y=0$.
- If $A_4=1$, it classifies $x_7$ with $y=1$, and no examples with $y=0$.
- If $A_4=0$, it classifies no examples with $y=1$, and $x_8$ with $y=0$.

We choose "If $A_4=1$, then $y=1$" as the third rule, since $A_4=1$ can classify the only example as $y=1$ without misclassifications.

After applying the third rule, the remaining example is $x_8$.

Considering the fourth rule:

We choose "$y=0$" as the fourth rule, since the only example remaining is $x_8$ with $y=0$.

The overall decision list:

1. If $A_1=1$, then $y=1$
2. Else if $A_2=1$, then $y=0$
3. Else if $A_4=1$, then $y=1$
4. Else, $y=0$

### Solution of Problem 4

1. The network with a hidden layer consists of an input layer ($x$), a hidden layer, and an output layer. The computation of the hidden layer is $c(w_1)x$, where $w_1$ are the weights from input to hidden layer. The computation of the output layer is $c w_2 \cdot (\text{hidden layer}) = c^2 (w_2 w_1) x$, where $w_2$ are the weights from hidden to output layer. If we denote the combined weights as $w = c w_1 w_2$, the output above can be written as $c \cdot w x$, which is exactly the same form as the computation for a single-layer network with no hidden layer with weight $w = c w_1 w_2$.

2. If there are 2 hidden layers in the neural network, the calculation is as follows:

   - The computation of hidden layer 1 is $c(w_1)x$, where $w_1$ are the weights from input to hidden layer 1.
  
   - The computation of hidden layer 2 is $c w_2 (\text{hidden layer 1}) = c^2 (w_2 w_1) x$, where $w_2$ are the weights from hidden layer 1 to hidden layer 2.
  
   - The computation of the output layer is $c w_3 \cdot (\text{hidden layer 2}) = c^3 (w_3 w_2 w_1) x$, where $w_3$ are the weights from hidden layer 2 to output layer.

   Hence, considering a neural network with $L$ hidden layers, the final output is:

   $$
   \text{output} = c^{L+1} (w_{L+1} w_L w_{L-1} \dots w_1) x
   $$

   If we denote the combined weights as $w = c^L (w_{L+1} w_L w_{L-1} \dots w_1)$, the output above can be written as $c \cdot w x$, which is exactly the same form as the computation for a single-layer network with no hidden layer with weight $w = c^L (w_{L+1} w_L w_{L-1} \dots w_1)$.

3. The network with a hidden layer consists of a weight matrix from input to hidden layer ($w_1$) and a weight matrix from hidden to output layer ($w_2$). The total number of weights in $w_1 = n \cdot h$. The total number of weights in $w_2 = h \cdot n$. Hence, the total number of weights in the network with a hidden layer is $2nh$. In the single-layer network with no hidden layers, the total number of weights is $n^2$. The extra number of weights in the network with a hidden layer is $2nh - n^2 = n(2h - n)$. If $h \ll n$ ($h < n/2$), the network with a hidden layer introduces a negative extra number of weights, which means the network has fewer weights compared to the single-layer network. The single-layer network requires more weights to achieve the same function in this case. The network with a hidden layer is more efficient and less expressive compared to the single-layer network, which is critical for high-dimensional data. Otherwise, the single-layer network will be more efficient when $h > n/2$.