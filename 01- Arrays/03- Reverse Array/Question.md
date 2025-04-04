# Reverse Array Without Using Extra Space

## Problem Description

Given an array `A` of `N` integers, reverse the array in-place without using extra space.

## Problem Constraints
- `1 <= N <= 10^5`
- `1 <= A[i] <= 10^9`

## Input Format
- The first argument `A` is an array of integers.

## Output Format
- Return the array `A` after reversing it in-place.

## Example Input

### Input 1:
```plaintext
A = [1, 2, 3, 4, 5]
```

### Input 2:
```plaintext
A = [10, 20, 30, 40]
```

## Example Output

### Output 1:
```plaintext
[5, 4, 3, 2, 1]
```

### Output 2:
```plaintext
[40, 30, 20, 10]
```

## Explanation

### Explanation 1:
The reversed array of `[1, 2, 3, 4, 5]` is `[5, 4, 3, 2, 1]`.

### Explanation 2:
The reversed array of `[10, 20, 30, 40]` is `[40, 30, 20, 10]`.

## Approach
1. Use two pointers: one at the beginning (`left`) and one at the end (`right`).
2. Swap the elements at `left` and `right`.
3. Move `left` forward and `right` backward until they meet or cross.
4. Return the modified array after all swaps are complete.

