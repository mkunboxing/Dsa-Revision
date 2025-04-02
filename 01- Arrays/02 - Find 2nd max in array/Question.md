# Find Second Maximum Element in an Array

## Problem Description

Given an array `A` of `N` integers, find and return the second maximum element present in the array. If there is no second maximum, return `-1`.

## Problem Constraints
- `1 <= N <= 10^5`
- `1 <= A[i] <= 10^9`

## Input Format
- The first argument `A` is an array of integers.

## Output Format
- Return the second maximum element in the array. If it does not exist, return `-1`.

## Example Input

### Input 1:
```plaintext
A = [1, 2, 3, 4, 5]
```

### Input 2:
```plaintext
A = [10, 20, 20, 5, 8, 15]
```

### Input 3:
```plaintext
A = [5, 5, 5]
```

## Example Output

### Output 1:
```plaintext
4
```

### Output 2:
```plaintext
15
```

### Output 3:
```plaintext
-1
```

## Explanation

### Explanation 1:
The maximum element in `[1, 2, 3, 4, 5]` is `5`, and the second maximum is `4`.

### Explanation 2:
The maximum element in `[10, 20, 20, 5, 8, 15]` is `20`, and the second maximum is `15`.

### Explanation 3:
Since all elements are the same, there is no second maximum, so we return `-1`.

## Approach
1. Initialize two variables, `maxElement` and `secondMax`, to store the maximum and second maximum values.
2. Traverse the array to find the largest element.
3. Traverse the array again to find the largest element smaller than `maxElement`.
4. Return `secondMax`, or `-1` if no valid second maximum exists.
5. Corner case: if A = [4,8,9, 40,40,40] then the second max is 9. for that you have to check else if (a[i]>secMax && a[i]<firstmax){
            secMax = a[i];
        }


