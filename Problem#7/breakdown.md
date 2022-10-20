Notes:

- Add 1 to all even integers, nothing to odd integers.
- Concatenates "!" to all strings and make the first letter of the word a capital letter.
- Changes all boolean values to its opposite.

**Breakdown**

1. Map through all the array elements
2. For number type:
   - for each element, check if the type is a number and it's divisible by 2, then add one to that number
   - If the number is not divisible by 2, then return as it is
3. For String type:
   - first letter would be uppercase
   - join the string with "!"
4. If the type is a boolean:
   - Toggle the Boolean Value
