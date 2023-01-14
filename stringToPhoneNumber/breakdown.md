Given:

- a string

Return:

- Replace string's alphabats characters with a numeric number.
- Once all characters are replaced, return replaced numeric string.

Rules:

1. Only replace alphabats from the given string.
2. You should be able to replace small or upperCase characters.

Breakdown:

1. Create a strToPhoneNumber string variable to hold the resulted string.

- let strToPhoneNumber = ""

2. Loop through a given String
3. Check if the character at given index is alphabat

   1. Use => test() of RegExp
   2. If the character is alphabat =>
   3. Check the given Conversion from the problem and replace that alphabat with a numeric number
      => str[i] = numeric number from conversion
      => strToPhoneNumber += str[i]
   4. if the character is not alphabat =>
      => strToPhoneNumber += str[i]

4. Once the loop has finished, **Return** strToPhoneNumber
