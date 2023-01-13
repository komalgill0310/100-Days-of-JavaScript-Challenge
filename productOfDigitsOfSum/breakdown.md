Given:

- one, two or more arguments in the form of an array

Return:

1. add the given arguments together to get a new number
2. Multiply the resulted output again if the returned number is of two digits or more

   - keep performing Step#2, until the resulted number is only one digit.

e.g.:

1. Given args: 16, 28

   - Sum = 16 + 28 = 44

2. Sum is of Two digits

   - Multiply = 4 \* 4 = 16

3. Mutiply result is of two digit again

   - Multiply = 6 \* 1 = 6

4. return 6

Breakdown:

1. First store the given args as an array into a const variable

- const arrOfNumbers = [...num]

2. Use array's reduce method, to add the numbers together

   const sumOfArrayNumbers = arrOfNumbers.reduce((a, c) => a + c)

3. Check if the sum from Step#2, is of One Digit Or More
4. First convert the sum into String using toString() method.

   - sum.toString().length

5. Check if length of the sum is === 1
   - Return sum
     else
   1. while(sum.toString().length != 1)
   2. Convert the sum into an array
      - sum = sum.toString().split("").reduce((a, c) => a \* parseInt(c), 1)
   3. When the while loop returns, false => Exit from the while loop
   4. **Return** sum
