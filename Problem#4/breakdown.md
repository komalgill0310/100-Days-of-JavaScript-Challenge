1. Write a function that moves all the zeroes to the end of an array. **_Do this without returning a copy of the input array._**

2. Notes

- You must mutate the original array.
- Keep the relative order of the non-zero elements the same.

_Examples_

- zeroesToEnd([1, 2, 0, 0, 4, 0, 5]) ➞ [1, 2, 4, 5, 0, 0, 0]

**Breakdown => Without Mutating**
_High Level Overview_

1. Remove all zeroes from the arr
2. return an array which has only zeros in it
3. concat step 1 + step 2

**_How to code_**

1. const nonZeroArr = arr.filter(num => num != 0)
2. const zeroItemArr = arr.filter(num => num === 0)
3. return nonZeroArr.concat(zeroItemArr)

**_Breakdown => With Mutation_**

1. create a variable to keep track of num of zeros
2. using while while loop, keep checking if the array includes 0

- find the indexof 0 from the array
- use splice method to delete that element
- increment the variable

3. Run another while loop, keep running until it's greater than 0

- push zero to array
  -decrement variable

4. Return array
