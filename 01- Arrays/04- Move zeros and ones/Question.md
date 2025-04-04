# Move Zeros to Left

## Problem Description
Given an array consisting of `0`s and `1`s, move all `0`s to the left while keeping the relative order of `1`s unchanged.

## Problem Constraints
- The array contains only `0`s and `1`s.
- The operation should be performed **in-place** without using extra space.

## Input Format
- A single array of integers containing only `0`s and `1`s.

## Output Format
- The modified array with all `0`s moved to the left.

## Example Input
```javascript
let arr = [0, 1, 1, 1, 1, 1];
```

## Example Output
```javascript
[0, 1, 1, 1, 1, 1]
```

## Approach
1. **Two-pointer approach**: Use two indices (`i` and `j`).
2. Iterate through the array using `i`.
3. Whenever a `0` is encountered at index `i`:
   - Swap it with the element at index `j`.
   - Increment `j` to keep track of the next position for swapping.
4. Continue iterating until the end of the array.
5. The function modifies the array in **O(N) time complexity** and **O(1) space complexity**.

## Complexity Analysis
- **Time Complexity**: `O(N)`, since we traverse the array once.
- **Space Complexity**: `O(1)`, since no extra space is used.


