# Container With Most Water

## Problem Description

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i-th` line are at `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the **most water**.

Return the **maximum amount of water** a container can store.

> **Note:** You may not slant the container.

---

## Constraints

- `n == height.length`
- `2 <= n <= 10^5`
- `0 <= height[i] <= 10^4`

---

## Input Format

- A single array `height` of integers representing vertical line heights.

---

## Output Format

- A single integer representing the maximum water a container can contain.

---

## Sample Input 0

```
height = [1,8,6,2,5,4,8,3,7]
```

## Sample Output 0

```
49
```

### Explanation

The lines at index 1 (height 8) and index 8 (height 7) form a container of width `8 - 1 = 7` and height `min(8, 7) = 7`. So the area is `7 * 7 = 49`.

---

## Approach

### Optimized Two Pointer Approach

1. Initialize two pointers, `left` at 0 and `right` at the end of the array.
2. Calculate the area between the lines at `left` and `right`:
   - `Area = (right - left) * min(height[left], height[right])`
3. Track the maximum area found so far.
4. Move the pointer that has the smaller height inward:
   - If `height[left] < height[right]`, increment `left`.
   - Else, decrement `right`.
5. Repeat until `left` is no longer less than `right`.

---

### Time and Space Complexity

- **Time Complexity:** `O(n)`  
  Each element is visited at most once as the two pointers move inward.

- **Space Complexity:** `O(1)`  
  No additional space is used.

---

## Edge Cases Considered

- All lines have the same height.
- One or more heights are zero.
- Largest container is formed by non-extreme indices (not just first and last).

