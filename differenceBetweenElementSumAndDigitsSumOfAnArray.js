// Breakdown:
// 1. Use reduce on the given array to get the sum of all the elements and store the output in a variable called "elementSum"
// 2. use reduce on the given array again and the store the output in a variable called "digitSum"
// ====> for each current value, check if value > 9
// ======> 1. convert the number into String
// ======> 2. Use split on the given string number to split the number
// =======> 3. Use reduce on the splitted number, to do the addition of each digit
// =======> 4. add the addition of digit, into the previous sum's values
// ====> However, if the number < 10
// =======> 1. just simply add it to the current sum of the values
// 3. return Math.abs(elementSum - digitSum)

var differenceOfSum = function (nums) {
  const elementsSum = nums.reduce((acc, num) => acc + num, 0);
  const digitsSum = nums.reduce(
    (acc, num) =>
      (acc +=
        num > 9
          ? String(num)
              .split("")
              .reduce((acc, digit) => acc + Number(digit), 0)
          : num),
    0
  );
  return Math.abs(elementsSum - digitsSum);
};

// Problem link: https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/
