Given:

- Array is given

Return:

- Magnitude of a vector

Notes:

- Use map and reduce both functions together
- If arr.length === 0, return an empty array

Breakdown:

1. First use map on the array to do the square of each array element
2. Use Reduce to do the sum of all array elements
3. Use Math.sqrt on the output of reduce
