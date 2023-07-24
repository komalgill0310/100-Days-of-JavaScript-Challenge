var findTheDistanceValue = function (arr1, arr2, d) {
  let distance = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.every((num) => Math.abs(arr1[i] - num) > d)) {
      distance++;
    }
  }
  return distance;
};

// Problem link: https://leetcode.com/problems/find-the-distance-value-between-two-arrays/description/
