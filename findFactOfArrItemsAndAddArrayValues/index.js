function evalFactorial(arr) {
  let calculatedFactorialArr = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i]);
    let factorial = 1;
    while (arr[i] > 0) {
      factorial *= arr[i];
      arr[i]--;
    }
    calculatedFactorialArr.push(factorial);
  }
  return calculatedFactorialArr.reduce((a, c) => a + c);
}

//Problem link: https://edabit.com/challenge/syor4LetxQytquHdx
