var filter = function (arr, fn) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isTrue = fn(arr[i], i);
    isTrue && filteredArr.push(arr[i]);
  }
  return filteredArr;
};

// Problem link: https://leetcode.com/problems/filter-elements-from-array/?utm_campaign=PostD5&utm_medium=Post&utm_source=Post&gio_link_id=a9a5VZr9
