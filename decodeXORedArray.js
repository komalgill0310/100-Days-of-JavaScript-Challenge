// Breakdown:
// 1. Create an array whose length is equal to encoded, fill the array with 0 and store it into a variable called "originalArray"
// 2. add first element which is given at the beginning of the array using unshift method.
// 3. Use for loop to loop over the originalArray
// ======> Parameters: i = 0; i < originalArray.length-1; i++
// ==========> 1. originalArray[i+1] = originalArray[i] ^ encoded[i]
// 4. return originalArray

var decode = function (encoded, first) {
  const originalArray = Array(encoded.length).fill(0);
  originalArray.unshift(first);
  for (let i = 0; i < originalArray.length - 1; i++) {
    originalArray[i + 1] = originalArray[i] ^ encoded[i];
  }
  return originalArray;
};

// Problem link: https://leetcode.com/problems/decode-xored-array/
