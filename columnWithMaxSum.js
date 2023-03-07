// Steps:
// Part I: split the given array into nested array of length of given N number
// => How to?
// ===> 1. Create an index variable at global level an initialize it to 0.
// ===> 2. Use map to loop through a given array and store the output in a variable called "numsSubArr"
// ========> 1. For each iteration of the array inside map, slice the given array from index till index + n(given n number) and store the out output in a variable called subArr
// ========> 2. update the index += n
// ========> 3. return subArr
// ===> 3. Use filter on numsSubArr to exclude empty array and store the output in a variable called exludeEmptyArr

// Part II: add all the columns together
// Steps:
// 1. Create an empty array called columnSum of length n
// 2. use For loop to loop through excludeSubArr
// ====> 1. Create a variable called sum and initialize it to 0
// ====> 1. Use nested for loop to loop over all the columns
// =========> 1. Loop through all the columns and perform addition and store it in a variable called "sum"
// ====> 2. Update columnSum[i] = sum

// PartIII: find the index of the maximum number
// Steps:
// 1. use indexOf method to find the index of the maximum number and then add 1 in order to return the Column number

function colWithMaxSum(nums, n) {
  // split the given array into nested array of length of given N number

  let index = 0;
  const numsSubArr = nums.map((_) => {
    const subArr = nums.slice(index, index + n);
    index += n;
    return subArr;
  });
  const excludeEmptyArr = numsSubArr.filter((subArr) => subArr.length);

  // add all the columns together

  const columnSum = Array(n);
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < excludeEmptyArr.length; j++) {
      sum = sum + excludeEmptyArr[j][i];
    }
    columnSum[i] = sum;
  }

  return columnSum.indexOf(Math.max(...columnSum)) + 1;
}

// Problem link: https://edabit.com/challenge/X47SKhYan6mATPfhA
