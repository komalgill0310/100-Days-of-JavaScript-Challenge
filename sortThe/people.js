// Breakdown:
// 1. create a new array called namesHeights of length equals to names
// 2. Create an array called sortedNames whose length should be equal to names.length
// 3. use for loop to map over the namesHeights array and for each value = [names[i],heights[i]]
// 4.sort the heights array in descending order
// 5. Use a for loop to loop over the namesHeights array
// ===> 1. Create a variable called height and store the value of namesHeights[i][1]
// ===> 1. Create a variable called index = heights.indexOf(height)
// ===> 2. sortedNames[index] = names[i]
// 6. return sortedNames

var sortPeople = function (names, heights) {
  const namesHeights = Array(names.length);
  const sortedNames = Array(names.length);
  for (let i = 0; i < namesHeights.length; i++) {
    namesHeights[i] = [names[i], heights[i]];
  }
  heights.sort((a, b) => b - a);
  for (let i = 0; i < namesHeights.length; i++) {
    const height = namesHeights[i][1];
    let index = heights.indexOf(height);
    sortedNames[index] = names[i];
  }
  console.log(sortedNames);
};

// Problem link: https://leetcode.com/problems/sort-the-people/
