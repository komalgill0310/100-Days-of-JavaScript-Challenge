_Problem BreakDown_

1. First find the minimum number from the array
2. Return an array excluding minimum number

_How to Code_

1. use Math.min(...arr), to get the minimum number
2. use filter on arr to exclude minimum number from the array

**Error:** This will remove all the minimum and duplicates from the array.

## Edge Case: if there are duplicates of a miniNum, then only remove the minimum value from the array once.

1. I can use indexof method because it will return the very first index of the first given element.
2. I can still use filter on the arr, but this time the parameter for the filter function would be item and index
3. I will check if the index of the element != index of minimumNumber

> Return a new array without minimum number from the array
