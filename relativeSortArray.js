var relativeSortArray = function (arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    const num2 = arr2[i];
    for (let j = 0; j < arr1.length; j++) {
      const num1 = arr1[j];
      if (num2 === num1) {
        arr1.splice(j, 1); //remove current element from the array
        arr1.splice(i, 0, num2); //add current element at the index i
      }
    }
  }
  console.log(arr1);
};

// yet to solve, bugs and this solution is failing

// Problem link: https://leetcode.com/problems/relative-sort-array/
