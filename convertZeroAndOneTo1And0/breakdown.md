Given:

- a string of numeric number in alphabats is provided.

Return:

- convert zero to 0
- convert one to 1

Conditions:

- Output should be a multiple of 8
  - However, if the output is not a multiple of 8, then ignore the extra character from the output of 0 & 1(remove from the end.)
    - and return the output till the length is divisible by 8.
  - If the length of the output is less than 8, return an empty string.
- ignore all other given string words which are not either zero OR one.
- Your search should be case-insensitive.

Breakdown:

1. Convert a string to an array using split method.
   - str.split(" ")
2. Use Array's map method to loop over the array from Step#1.
   - Inside map method,
     - Check if a word.toLowerCase() === zero
       - word = 0
     - if a word.toLowerCase() === one
       - word = 1

- array(fromStep1).map(word => {
  if(word.toLowerCase()==="zero") word = 0
  if(word.toLowerCase()==="one") word = 1
  })
- **New Finding**
  - If Condition from a map method of an array will give an error.
    - Error: _TypeError: word.toLowerCase is not a function at Array.map_
      - Solution: toLowerCase is not a function occurs when we call toLowerCase() function on object which is not an string. toLowerCase() function can be only called on string. To resolve this issue, convert value to string using toString() ,method before calling toLowerCase() method.

**Updated version of array.map() will be**: - array(fromStep1).map(word => {
if(word.toString().toLowerCase()==="zero") word = 0
if(word.toString().toLowerCase()==="one") word = 1
})

- all the other words which are neither zero/one, will get ignored here, and we will get the output in 0 and 1.

3. If the length of the output from array's map method % 8 === 0, return output from array's map method as it is.

- If the length of the output from array's map method < 8, return ""
- If the length of the output from array's map method > 8 && from output from array's map method % 8 != 0
  - const remainder = output.length % 8
  - return output.slice(0, output.length-remainder)
    - Reason for the second arg(output.length-remainder) of the slice Method =>
      - this will give us the length which is divisible by 8.
    - this will ignore the extra character from the end and we will be able to return an output which is divisible by 8.
- REMEMBER:
  - SLICE method fetch the value from first arg till before second arg.
