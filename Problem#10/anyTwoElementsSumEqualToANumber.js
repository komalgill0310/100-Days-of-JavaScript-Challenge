function checkSum(arr, n) {
  return arr
    .slice(1)
    .some((num, index) => num + arr[index] === n || arr[0] + arr.pop() === n);
}

//Time to Solve: 16Min
