# Find Maximum Element in an Array

## Problem Description

Given an array `A` of `N` integers, find and return the maximum element present in the array.

## Problem Constraints
- `1 <= N <= 10^5`
- `1 <= A[i] <= 10^9`

## Input Format
- The first argument `A` is an array of integers.

## Output Format
- Return the maximum element in the array.

## Example Input

### Input 1:
```plaintext
A = [1, 2, 3, 4, 5]
```

### Input 2:
```plaintext
A = [10, 20, 5, 8, 15]
```

## Example Output

### Output 1:
```plaintext
5
```

### Output 2:
```plaintext
20
```

## Explanation

### Explanation 1:
The maximum element in the array `[1, 2, 3, 4, 5]` is `5`.

### Explanation 2:
The maximum element in the array `[10, 20, 5, 8, 15]` is `20`.

## Approach
1. Initialize a variable `maxElement` with the first element of the array.
2. Iterate through the array and update `maxElement` whenever a larger element is found.
3. Return `maxElement` after traversing the array.