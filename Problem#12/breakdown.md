Given:

- Arary is given
- convert each array value to an object key-value
- return an array of resulting objects.

Notes:

- given array item will be key of an object, and the array item which is number should be a string when it's a key of an object
- value will be the character code of the the given array item and also convert that to a string
- return an array of object key-value pairs

**Breakdown**

1. How to get the Character code of a value
   - use a method called String.fromCharCode(value) will give a character code of the specified value
2. How to convert a number to a string value
   - use toString() method
3. How to return an object in place of the array item value
   - use map method because it will return an object
     - Parameter: array's value
     - create an object for each item
       - ([value.toString()] : String.fromCharCode(value))
