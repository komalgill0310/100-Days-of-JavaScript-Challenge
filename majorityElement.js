// Steps:
// 1. Sort the array in ascending order
// 2. Create an array called slicedSortedArr
// 3. Check if nums.length === 1
// ===> return nums[0]
// 4. Use for loop, on the sorted array
// =====> Start Index = sortedArr.indexOf(arr[i])
// =====> end Index = sortedArr.lastIndexOf(arr[i])
// =====> if(startIndex != endIndex)
// ========> slicedSortedArr.push(sortedArr.slice(startIndex, lastIndex+1))
// =====> i = endIndex
// 4. Use filter on slicedSortedArr
// ====> 1. Check each subArr's length > arr.length/2
// ========> return subArr[0]

var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  const slicedSortedArr = [];
  if (nums.length === 1) return nums[0];
  for (let i = 0; i < nums.length; i++) {
    const startIndex = nums.indexOf(nums[i]);
    const lastIndex = nums.lastIndexOf(nums[i]);
    if (startIndex != lastIndex) {
      slicedSortedArr.push(nums.slice(startIndex, lastIndex + 1));
    }
    i = lastIndex;
  }
  return slicedSortedArr.filter(
    (slicedArr) => slicedArr.length > nums.length / 2
  )[0][0];
};

// A BETTER APPROACH

var majorityElement = function (nums) {
  const freq = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in freq) {
      freq[nums[i]]++;
    } else {
      freq[nums[i]] = 1;
    }
  }
  let maxFreq = 0;
  let majority = null;
  for (let num in freq) {
    if (freq[num] > maxFreq) {
      maxFreq = freq[num];
      majority = num;
    }
  }
  if (maxFreq > nums.length / 2) {
    return majority;
  } else {
    return null;
  }
};

// Problem link: https://leetcode.com/problems/majority-element/
