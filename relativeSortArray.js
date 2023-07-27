var relativeSortArray = function (arr1, arr2) {
  let count = 0;
  for (let i = 0; i < arr2.length; i++) {
    const num2 = arr2[i];
    for (let j = 0; j < arr1.length; j++) {
      const num1 = arr1[j];
      if (num2 === num1) {
        arr1.splice(j, 1); //remove current element from the array
        arr1.splice(count, 0, num2); //add current element at the index i
        count++; //it will keep track of the duplicate elements which are equal to num2
      }
    }
  }
  const sortNonArr2Elements = arr1.splice(count).sort((a, b) => a - b);
  arr1.push(...sortNonArr2Elements);
  return arr1;
};

// Problem link: https://leetcode.com/problems/relative-sort-array/
