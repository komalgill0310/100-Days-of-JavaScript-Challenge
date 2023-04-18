function plusOne(digits) {
  // Start by adding 1 to the least significant digit
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += carry;
    if (digits[i] < 10) {
      // If the result is less than 10, we're done
      carry = 0;
      break;
    } else {
      // Otherwise, carry the 1 to the next most significant digit
      digits[i] = 0;
      carry = 1;
    }
  }

  // If there's still a carry, we need to add a new most significant digit
  if (carry) {
    digits.unshift(1);
  }

  return digits;
}
// Problem link: https://leetcode.com/problems/plus-one/
