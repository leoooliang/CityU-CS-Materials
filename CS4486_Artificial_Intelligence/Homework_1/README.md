# Homework 1

## Problem 1 (25 points)

Which of the following are true and which are false? Explain your answers.

a. Depth-first search always expands at least as many nodes as $A^*$ search with an admissible heuristic.

b. $h(n)=0$ is an admissible heuristic for the 8-puzzle.

c. $A^*$ is of no use in robotics because percepts, states, and actions are continuous.

d. Breadth-first search is complete even if zero step costs are allowed.

e. Assume that a rook can move on a chessboard any number of squares in a straight line, vertically or horizontally, but cannot jump over other pieces. Manhattan distance is an admissible heuristic for the problem of moving the rook from square $A$ to square $B$ in the smallest number of moves.

## Problem 2 (25 points)

Give the name of the algorithm that results from each of the following special cases:

a. Local beam search with $k=1$.

b. Local beam search with one initial state and no limit on the number of states retained.

c. Simulated annealing with $T=0$ at all times (and omitting the termination test).

d. Simulated annealing with $T=\infty$ at all times.

e. Genetic algorithm with population size $N=1$.

## Problem 3 (25 points)

In the following, a "max" tree consists only of max nodes, whereas an "expectimax" tree consists of a max node at the root with alternating layers of chance and max nodes. All chance nodes, all outcome probabilities are nonzero. The goal is to find the value of the root with a bounded-depth search. For each of (1)-(7), either give an example or explain why this is impossible.

1. Assuming that leaf values are finite but unbounded, is pruning (as in alpha-beta) ever possible in a max tree?

2. Is pruning ever possible in an expectimax tree under the same conditions?

3. If leaf values are all nonnegative, is pruning ever possible in a max tree? Give an example, or explain why not.

4. If leaf values are all nonnegative, is pruning ever possible in an expectimax tree? Give an example, or explain why not.

5. If leaf values are all in the range $[0,1]$, is pruning ever possible in a max tree? Give an example, or explain why not.

6. If leaf values are all in the range $[0,1]$, is pruning ever possible in an expectimax tree?

7. Consider the outcomes of a chance node in an expectimax tree. Which of the following evaluation orders is most likely to yield pruning opportunities?

   (a) Lowest probability first

   (b) Highest probability first

   (c) Doesn't make any difference

## Problem 4 (25 points)

Which of the following are correct?

1. False $\models$ True.

2. True $\models$ False.

3. $(A \wedge B) \models (A \leftrightarrow B)$.

4. $A \leftrightarrow B \models A \vee B$.

5. $A \leftrightarrow B \models \neg A \vee B$.

6. $(A \wedge B) \rightarrow C \models (A \rightarrow C) \vee (B \rightarrow C)$.

7. $(C \vee (\neg A \wedge \neg B)) \equiv ((A \rightarrow C) \wedge (B \rightarrow C))$.

8. $(A \vee B) \wedge (\neg C \vee \neg D \vee E) \models (A \vee B)$.

9. $(A \vee B) \wedge (\neg C \vee \neg D \vee E) \models (A \vee B) \wedge (\neg D \vee E)$.

10. $(A \vee B) \wedge \neg (A \rightarrow B)$ is satisfiable.

11. $(A \leftrightarrow B) \wedge (\neg A \vee B)$ is satisfiable.

12. $(A \leftrightarrow B) \leftrightarrow C$ has the same number of models as $(A \leftrightarrow B)$ for any fixed set of proposition symbols that includes A, B, C.

## Solutions

### Solution to Problem 1

a. **False.** DFS explores the deepest unexpanded nodes while $A^*$ search explores by using an admissible heuristic. In some cases, DFS can reach the goal with a shorter path than $A^*$ search when $A^*$ search expands to other nodes due to the heuristic value, but the path found by DFS may not be optimal in these cases.

b. **True.** It is admissible because it never overestimates the actual minimum cost from any node to the goal.

c. **False.** $A^*$ search can be used in robotics, since the space can be discretized or skeletonized.

d. **True.** BFS guarantees finding the goal by expanding nodes based on increasing depth if the branching factor is finite. Even if step costs are zero, BFS does not rely on costs for its completeness.

e. **False.** A rook can move diagonally in only 1 move, while the Manhanttan distance required more than 1 move.

### Solution to Problem 2

a. **Hill-climbing search.** It reduces the number of states to 1, meaning only one state is being considered at any time, which is typically a hill-climbing search.

b. **Breadth-first search.** It allows exploration of all possible neighbors at each level before moving to the next level, which is typically a BFS.

c. **First-choice hill-climbing search.** With $T=0$, the algorithm will not allow any bad movement since the probability of un-optimizing depends on the badness of the move ($\Delta E$). In other words, the algorithm only moves to better states.

d. **Random Walk.** With $T=\infty$, the algorithm will allow any movement since the probability of un-optimizing all states becomes 1. This results in a random walk through the state space.

e. **Random Walk.** When $N=1$, the single candidate can only iteratively modify itself randomly by mutation.

### Solution to Problem 3

1. It is **not possible**. This is because there is no way to guarantee that an unevaluated subtree does not contain a higher value than the current maximum. All branches need to be visited, and no pruning will occur.
   
2. It is **not possible**. Since chance nodes compute weighted averages of all children, and all probabilities are nonzero, we must evaluate every child to compute the correct expected value.

3. It **is possible**. Leaf values can be infinite if leaf values are all nonnegative. If any leaf in a subtree has a value of $+\infty$, the entire subtree's value becomes $+\infty$. Once the first child $(+\infty)$ is evaluated, the root's value is immediately known to be $+\infty$. All remaining siblings can be pruned because no other value can exceed $+\infty$.

4. It **is possible**. Leaf values can be infinite if leaf values are all nonnegative. For a chance node, the expected value of the chance node becomes $+\infty$ if any child of that chance node has a value $+\infty$. For a max node, all other children (chance nodes) can be pruned if one child evaluates to $+\infty$. Once the first child is evaluated as $+\infty$, the root's value is immediately known to be $+\infty$. All remaining siblings can be pruned because no other value can exceed $+\infty$.

5. It **is possible**. The bounded range $[0,1]$ allows pruning of the remaining path when the maximum value 1 is found.

6. It **is possible**. For example, if the parent of the leaf nodes is a max node and the first child evaluates to 1, the value of the parent node (max node) becomes 1. All remaining siblings of that max node can be pruned because no other value can exceed 1.

7. The answer is **(b)**. High-probability outcomes dominate the expected value of a chance node. Evaluating them first allows early bounding and potential pruning.

### Solution to Problem 4

1. **Correct.** If $X \models Y$, then in every case where $X$ is true, $Y$ must also be true. In this case, $X=$ False and $Y=$ True. Since $X=$ False is never true, the statement $X \models Y$ is vacuously true.

2. **Incorrect.** If $X \models Y$, then in every case where $X$ is true, $Y$ must also be true. In this case, $X=$ True and $Y=$ False. $Y=$ False needs to be true since $X=$ True is true. However, $Y=$ False must be false.

3. **Correct.** If $A \wedge B$ is true, $A$ and $B$ must be true. Therefore, $A \leftrightarrow B$ must be true if $A$ and $B$ are true.

4. **Incorrect.** If $A \leftrightarrow B$ is true, there are two cases: both $A$ and $B$ are true, or both $A$ and $B$ are false. If both $A$ and $B$ are true, $A \vee B$ is true. If $A$ and $B$ are false, $A \vee B$ is false. In the second case, $A \leftrightarrow B$ is true but $A \vee B$ is false, so the entailment does not hold.

5. **Correct.** If $A \leftrightarrow B$ is true, there are two cases: both $A$ and $B$ are true, or both $A$ and $B$ are false. If both $A$ and $B$ are true, $\neg A \vee B$ is true. If $A$ and $B$ are false, $\neg A \vee B$ is also true. In both cases, $A \leftrightarrow B$ is true and $\neg A \vee B$ is true. Therefore, $A \leftrightarrow B$ entails $\neg A \vee B$.

6. **Correct.** Considering the truth table of $A \wedge B \rightarrow C$ and $(A \rightarrow C) \vee (B \rightarrow C)$, we can see every time when $A \wedge B \rightarrow C$ is true, $(A \rightarrow C) \vee (B \rightarrow C)$ must also be true. Therefore, $A \wedge B \rightarrow C$ entails $(A \rightarrow C) \vee (B \rightarrow C)$.

   | A | B | C | $((A \wedge B) \rightarrow C)$ | $((A \rightarrow C) \vee (B \rightarrow C))$ |
   |---|---|-----|-------------------------------|-------------------------------------------|
   | F | F | F | T | T |
   | F | F | T | T | T |
   | F | T | F | T | T |
   | F | T | T | T | T |
   | T | F | F | T | T |
   | T | F | T | T | T |
   | T | T | F | F | F |
   | T | T | T | T | T |

7. **Correct.** Because $C \vee (\neg A \wedge \neg B) = (\neg A \vee C) \wedge (\neg B \vee C) = (A \rightarrow C) \wedge (B \rightarrow C)$.

8. **Correct.** $(A \vee B)$ is a part of the first statement $(A \vee B) \wedge (\neg C \vee \neg D \vee E)$. If the first statement is true, then $(A \vee B)$ must also be true.

9. **Incorrect.** If $A=$ true, $B=$ false, $C=$ false, $D=$ true, $E=$ false, $(A \vee B) \wedge (\neg C \vee \neg D \vee E)$ is true while $(A \vee B) \wedge (\neg D \vee E)$ is false. The entailment does not hold in this case.

10. **Correct.** $(A \vee B) \wedge \neg (A \rightarrow B) = (A \vee B) \wedge (A \wedge \neg B)$. If $A=$ true and $B=$ false, the statement is true.

11. **Correct.**  RHS is entailed by LHS, which is satisfiable when $A$ and $B$ have the same truth value (both true or both false).

12. **Correct.** 
    
    | A | B | C | $(A \leftrightarrow B)$ | $(A \leftrightarrow B) \leftrightarrow C$ |
    |---|---|-----|-------------------------------|-------------------------------------------|
    | F | F | F | T | T |
    | F | F | T | T | F |
    | F | T | F | F | T |
    | F | T | T | F | F |
    | T | F | F | F | T |
    | T | F | T | F | F |
    | T | T | F | T | F |
    | T | T | T | T | T |

    - $(A \leftrightarrow B)$ is true in 4 cases: rows 1, 2, 7, 8.

    - $(A \leftrightarrow B) \leftrightarrow C$ is true in 4 cases: rows 1, 3, 5, 8.