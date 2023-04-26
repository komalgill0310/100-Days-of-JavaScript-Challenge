function sumOddLengthSubarrays(arr) {
  let sum = 0;
  for (let i = 1; i <= arr.length; i += 2) {
    for (let j = 0; j <= arr.length - i; j++) {
      for (let k = j; k < j + i; k++) {
        sum += arr[k];
      }
    }
  }
  return sum;
}

// SOME TEST CASES ARE FAILING => NEED TO RETHINK THE SOLUTION

// Problem link: https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
