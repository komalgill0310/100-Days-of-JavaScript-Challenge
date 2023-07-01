var mergeSimilarItems = function (items1, items2) {
  if (items1.length > items2.length) {
    return mergeItems(items1, items2);
  } else if (items2.length > items1.length) {
    return mergeItems(items2, items1);
  } else {
    return mergeItems(items1, items2);
  }
};

function mergeItems(arr1, arr2) {
  const arr2Values = arr2.map((item) => item[0]);
  const arr1Values = arr1.map((item) => item[0]);
  const ret = [];
  ret.push(...arr2.filter((item2) => !arr1Values.includes(item2[0])));
  arr1.forEach((item) => {
    if (!arr2Values.includes(item[0])) {
      ret.push(item);
    } else {
      const index = arr2Values.indexOf(item[0]);
      ret.push([item[0], item[1] + arr2[index][1]]);
    }
  });
  ret.sort((a, b) => a[0] - b[0]);
  return ret;
}

// Problem link: https://leetcode.com/problems/merge-similar-items/
