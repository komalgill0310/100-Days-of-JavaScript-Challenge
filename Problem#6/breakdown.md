**False Scenario**

- if the length of both array differ, return false
- after doing the addition of first array with second array elements, if the result array do not match with its elements then return false

**True Scenario**

- if the added elements match with each other, return true

_BreakDown_

1. Check if the length is differ then return false
2. Do the addition of first element of first array with first element of second array
   - How to perform this step?
     - use arr.map method
     - use the map on array1
       - pass the elements in map => item, index
       - item + arr2[index]
3. How to check if all of the array elements meet each other
   - slice the sumArr from index 1
   - use slice arr with arr.every method to check if the item from the slice array match the elements with the nonSliced Array
