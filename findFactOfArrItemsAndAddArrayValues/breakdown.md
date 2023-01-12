Given:

- an array of string numbers

Return:

- the sum of all the calculated factorials of the array's items

Breakdown:

1. Create an empty array

   - let calculatedFactorialArr = []

2. Run a for loop on the given array

   - parameter: i = 0; i < arr.length; i++
     - Inside For Loop:
       1. Convert arr[i] to Integer
       - arr[i] = parseInt(arr[i])
       - let factorial = 1
       - _Find Factorial_
         1. While(factorialNum > 0){
            factorial = factorial \* factorialNum
            factorialNum--
            }
       - calculatedFactorialArr.push(factorial)

3. **How to calculate the sum of all array's values**
4. Use Array's reduce method:

   - calculatedFactorialArr.reduce((a,c) => a+c)

5. **return** calculatedFactorialArr
