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
  const ret = [];
  for (let items1 of arr1) {
    const [value1, weight1] = items1;
    for (let items2 of arr2) {
      const [value2, weight2] = items2;
      if (value1 === value2) {
        ret.push([value1, weight1 + weight2]);
      }
      break;
    }
  }
  return ret;
}

// yet to solve

// Problem link: https://leetcode.com/problems/merge-similar-items/
