# Find Flower Pair with Target Sum


[Two Sum problem on LeetCode](https://leetcode.com/problems/two-sum/description/).

[Same Question on unstop](https://unstop.com/code/challenge-assessment/262419?moduleId=372).

---

## Problem Description
One day, Mary wanted to give a present to her friend. She decided on a beautiful bouquet of flowers and began collecting them. She needed precisely **2 types of flowers**, and the total number of flowers required was **`t`**. To gather these, she started picking from her garden, which contained **`N`** types of flowers. Each type was arranged in a queue in **non-decreasing order**, such as 1, 3, 6, 15, and so forth.

Now, she seeks your help in determining the **indexes of the two flowers** she should collect.

> **Note**: For every case, there will always be a **pair of flowers whose sum equals `t`**. If multiple pairs exist, select the **first occurrence**.

## Constraints
- 2 <= N <= 10^4
- 1 <= a[i] <= 10^3
- 2 <= t <= 2 * 10^3

## Input Format
- The first line contains two integers `N` and `t`, where `N` is the number of flower types and `t` is the total flower sum needed.
- The second line contains `N` space-separated integers representing the number of flowers of each type.

## Output Format
- Print the indexes of the **two flowers** that sum up to `t`. The **first index should be smaller than the second**. Both indexes should be **zero-based**.

## Sample Input 0
```
5 2
1 1 2 3 4
```

## Sample Output 0
```
0 1
```

## Explanation 0
Flowers at index 0 and 1 sum up to the target only: `1 + 1 = 2`.

## Sample Input 1
```
7 5
1 2 2 4 5 7 10
```

## Sample Output 1
```
0 3
```

## Explanation 1
Flowers at index 0 and 3 sum up to the target: `1 + 4 = 5`.

## Approach

### Brute Force Approach
1. Use a nested loop to check all pairs in the array.
2. For every element `arr[i]`, check every subsequent element `arr[j]` (`j > i`).
3. If `arr[i] + arr[j] == t`, store the indices `i` and `j` and return.
4. This guarantees the first occurring valid pair will be returned.

**Time Complexity**: `O(N^2)`

**Space Complexity**: `O(1)`

---

### Optimized Approach (Two Pointers)
1. Since the array is sorted in non-decreasing order, we can use the **two-pointer technique** to reduce time complexity.
2. Initialize two pointers: `i = 0` and `j = N - 1`.
3. Compute the sum of elements at index `i` and `j`.
4. If the sum equals the target `t`, print the pair of indices and return.
5. If the sum is less than `t`, increment `i`.
6. If the sum is greater than `t`, decrement `j`.

This ensures we find the **first valid pair** with minimal comparisons.

**Time Complexity**: `O(N)`  
**Space Complexity**: `O(1)`

### Edge Cases Considered
- All elements are the same and sum forms only with duplicates.
- Target is formed by the first and last element.
- Array has the minimum number of elements (2).

This optimized method ensures efficiency while still satisfying the requirement to return the **first valid pair**.

