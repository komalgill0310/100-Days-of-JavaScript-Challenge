Given:

- Array of number
- A Number

OutCome:

- if any of the array's 2 two number's sum === number ? true : false

**Breakdown**

1. Slice the given array from index 1
2. use Array.some() function to test the condition
   - Parameters:
     - each number from the array
     - index of an element
3. Check if item from the array + arr[index] === number || if the item at index 1 + array's last element === number
