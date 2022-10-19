1. Something is considered Boomerang, a sub-array is length is 3 with the first and last digits being the same and the middle digit being different.

_examples:_ [3, 7, 3], [1, -1, 1], [5, 6, 5]

**Notes**

1. [5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.
2. Be aware that boomerangs can overlap, like so:
   [1, 7, 1, 7, 1, 7, 1]
   // 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]

   _High level OverView_

3. Create a sub-array from the give array of length 3
4. fist and last elements cannot make a sub array
5. Start making sub array from from index 1 till second last element
6. check for each sub array if the first and last element match each other and the middle one is not equal to either first or last element from the array.

_How to Code_

1. Create a variable at the global level

- let numberOfBoomerangs = 0

2. run a for loop on the given array=> for(let i=1; i<arr.length-1;i++)
3. check if the elements at i-1===i+1&&i!=i-1

- if it is true -> increment numberOfBoomerangs
