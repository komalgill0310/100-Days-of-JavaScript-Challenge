Given:

- Two Array given of length 5
- if any two number of array is greater than array 2 then return True otherwise false

Breakdown:

1. first sort the array in ascending order
2. Check if last and second last element of the array one are greater than second array
   - return true other wise false

How to code:

1. Sort the array using array.sort()method
2. check the output:
   - if(arr1.pop()>arr2.pop())
     - then arr1.slice(-1)+arr1.slice(-2,-1)>arr2.slice(-1)+arr2.slice(-2,-1)

NOTE:

- POP() method will change the length of the original array
  so instead of using pop, we can use slice to get the desired element and also slice will not change the length of the array

Update version of the code should be:

- you1.slice(-1) + you1.slice(-2, -1) > opp1.slice(-1) + opp1.slice(-2, -1)
