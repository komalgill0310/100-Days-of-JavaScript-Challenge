Given:

- An array is given of even and Odd numbers. - a num is given either Odd or even number.

Return:

- Count the number of liked Spots.

Breakdown:

1. Add the number between given Array at specific places.

- e.g.:
  - arr = [0, 4, 6, 8]
  - num = 9
- Insert the number between the array's values.
  - [0, 9, 4, 9, 6, 9, 8]

2. **How to count the number of liked spots.**

- Rules:
  1. If the num is even
  - arr's value before num % 2 === 0 && arr's value after num % 2 ===0
    - likedSpots = likedSpots + 1
  2. If the num is odd
  - arr's value before num % 2 != 0 && arr's value after num % 2 != 0
    - likedSpots = likedSpots + 1
  3. If the num is even OR odd
  - arr's value before num % 2 === 0 && arr's value after num % 2 != 0
    OR
  - arr's value before num % 2 != 0 && arr's value after num %2 === 0
    - likedSpots = likedSpots + 1

_Breakdown:_

1. Insert the num into given Array, and do not change the original array.

- Use array's map method, to loop through an array.
- Slice the given array from Index 1, before running a map on the array.
  - Parameter of map will be: current value of the sliced arr, index
    - Inside map method:
      1. Create a sub-arr
      2. insert the value of original array at given index value, given number, current value of the array
    - e.g.: [arr[i], num, currValue]
  - Map wil return: [[arr[i], num, currValue]]
  - const insertNumToArr = arr.slice(1).map((c,i) => [arr[i], num, c])

2. Create a variable to store the number of likedSpots.

- let likedSpots = 0

3. Use for...of loop to check for the likedSpots Conditions(Check condition from above):

- for(let subArr of insertNumToArr){
  if(num % 2 === 0){
  likedSpots = (c[0]%2===0 && c[2]%2===0) ? likedSpots+1 : likedSpots
  }
  if(num%2!=0){
  likedSpots = (c[0]%2!=0 && c[2]%2!=0) ? likedSpots+1 : likedSpots
  }
  likedSpots = (c[0]%2===0 && c[2]%2!=0)||(c[0]%2!=0 && c[2]%2===0)? likedSpots+1 : likedSpots
  }

4. At last, return **likedSpots**
