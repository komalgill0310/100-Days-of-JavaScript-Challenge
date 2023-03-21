// Step1 => UnderStand the problem
// 1. Two arrays
// => First Array =>
// ==> 1. Length of array = number of children
// ==> 2. array[i] = how many cookie the child atleast need to satisfy its hunger
// => Second Array =>
// ==> 1. Length of array = total number of cookies
// ==> 2. array[j] = size of the cookie

// In General: Return how many values from cookies data array >= values for desire of cookies data

// 2. Output:
// ==> Return how many children can you make them satisfy by fulfilling their desire for cookies.

var findContentChildren = function (g, s) {
  let maxNumOfChildrenContent = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let i = 0,
    j = 0;
  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      i++;
      j++;
      maxNumOfChildrenContent++;
    } else {
      j++;
    }
  }
  return maxNumOfChildrenContent;
};

// Problem link: https://leetcode.com/problems/assign-cookies/
