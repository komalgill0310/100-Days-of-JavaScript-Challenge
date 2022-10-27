Given:

- Array

Return:

- if value is true
  - end the array with Pong
- if Value is false
  - end the array with Ping

Breakdown:

1. Create a copy of the original array

- let copyOfArray = [].concat(originalArray)
  - Note: If we do it like below in order to make the copy, then if you change the copy the original will get changed also.
    e.g.: let copyOfArray = originalArray

2. Loop through the original Array using for loop

   - for loop=> let i = 0; i<originalArray.length; i= i+2
   - inside for loop: copyOfArray.splice(i+1,0,"Pong")

3. If value is true and last element of copyOfArray is "Ping":
   copyOfArray.push("Pong")
4. If value is false:
   return copy of array
