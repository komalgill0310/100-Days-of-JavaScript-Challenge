// Given: an Array is given of length 2 or more
// Return: smaller array from the given array
// STEPS:
// 1. Check if the array length is even
// => split the given array into two array of equal length
// else -> if the length is odd
// => exclude the middle number of the array
// => follow the same logic from Step#5
// 2. I have two array of equal length
// 3. Reverse the array which we have from the second part of the array
// 4. Now, perform addition
// => first element of first array + first element of Reversed array and so on.
// 5. divide each element of the returned array from Step#4 by 2
// 6. Return the array from Step#5

// PROBLEM BREKDOWN again into more simpler steps with variable names:
// 1. if (array's length % 2) === 0
// => const leftPartArr = arr.slice(0, (arr.length/2)+1)
// => const reversedRightPartArr = arr.slice( (arr.length/2) + 1, -1)
// else
// => const eliminateMiddleNumOfArr = arr.splice(Math.floor(arr.length/2), 1)
// this will update the original array, so we do not need to store the result into a variable
// UPDATE: arr.splice(Math.floor(arr.length/2), 1)
// PERFORM STEP# 18 AND STEP# 19

//HOW CAN I AVOID THE LOGIC REPETIION
// START OVER:
// IF array.length % 2 !== 0
// arr.splice(Math.floor(arr.length/2), 1) => will update the original array
//BREAK THE ARRAY INTO TWO EQUAL LENGTH OF AN ARRAY
// const leftPartArr = arr.slice(0, (arr.length/2))
// const reversedRightPartArr = arr.slice(arr.length/2).reverse()
// PERFORM THE ADDTION OF leftPartArr with reversedRightPartArr and RETURN a NEW ARRAY
// I can use Map method, and it will return a new array
// const sumOfleftArrWithReversedRightArr = leftPartArr.map((num, i) => num + reversedRightPartArr[i])
// DIVIDE THE EACH ELEMENT OF THE sumOfleftArrWithReversedRightArr BY 2, return this array
// USE ANOTHER MAP METHOD:
// => const divideEachNumWithTwo = sumOfleftArrWithReversedRightArr.map(num => num / 2)

// CAN I COMBINE STEP#35 & STEP# 38
// const divideSumByTwo = leftPartArr.map((num, i) => (num + reversedRightPartArr[i]) / 2)
// RETURN divideSumByTwo

// WHAT IF AFTER DIVISION IN STEP# 41, THE NUMBER IS FLOAT => THEN HOW TO HAVE THAT FLOAT NUMBER TILL ONE DECIMAL POINT
// => HOW TO CHECK IF NUMBER IS NOT AN INTEGER
//  =>  by using => Number.isInteger(num) will return TRUE if the number is integer otherwise false

// UPDATE OF STEP# 41
// const divideSumByTwo = leftPartArr.map((num, i) => {
//  => const sumDivideByTwo = (num + reversedRightPartArr[i]) / 2
//            return Number.isInteger(sumDivideByTwo) ?             sumDivideByTwo : +sumDivideByTwo.toFixed(1)
// })

function antipodesAverage(arr) {
  if (arr.length % 2 !== 0) {
    arr.splice(Math.floor(arr.length / 2), 1);
  }
  const leftPartArr = arr.slice(0, arr.length / 2);
  const reversedRightPartArr = arr.slice(arr.length / 2).reverse();
  const sumDivideByTwo = leftPartArr.map((num, i) => {
    const divideSumByTwo = (num + reversedRightPartArr[i]) / 2;
    return Number.isInteger(divideSumByTwo)
      ? divideSumByTwo
      : +divideSumByTwo.toFixed(1);
  });
  return sumDivideByTwo;
}

// Problem link: https://edabit.com/challenge/NJ5GkgQbshyDDX3bq
