If any of the array item is string or not a number, then return "Strings not permitted!"

PartII:
How to check if the next element is greater than the array element before?

Steps:

- create a new array from the give array, which starts from the index 1.
- we compare all the elements from the new array with the given array to check if the new array elements are greater than the given array elements

_How to code_

1. use array's every method to check if all the array items are number and if not then return "Strings not permitted!"
2. Create a variable called updateArray.
3. const updateArray = arr.slice(1)
4. In order to make both array's length equal => given array would be arr.slice(0,-1)
5. return arr.every((num,index) => updateArray[i]>num)

> We should get either true => if all the elements are greater or false otherwise.
