var findRestaurant = function (list1, list2) {
  let commonStrArr =
    list1.length < list2.length
      ? common(list1, list2)
      : list2.length < list1.length
      ? common(list2, list1)
      : common(list1, list2);
  if (commonStrArr.length === 1) return commonStrArr[0].slice(0, 1);
  const sortedArr = commonStrArr.sort((a, b) => a[1] - b[1]);
  const minIndex = sortedArr[0][1];
  return sortedArr
    .filter((strArr) => strArr[1] === minIndex)
    .map((arr) => arr[0]);
};

function common(list1, list2) {
  let arr = [];
  for (let i = 0; i < list1.length; i++) {
    if (list2.includes(list1[i])) {
      arr.push([list1[i], i + list2.indexOf(list1[i])]);
    }
  }
  return arr;
}

// Problem link: https://leetcode.com/problems/minimum-index-sum-of-two-lists/description/
