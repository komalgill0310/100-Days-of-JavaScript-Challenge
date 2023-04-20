// Breakdown:
// 1. Use math.max to find the maximum number of candies from candies array and store it in a variable called maxNumOfCandies
// 2. Use map on candies and store the output in a variable called result
// ===> 1. For each kids candy, check if (current kid's candy+extraCandies) >= maxNumOfCandies
// ========> 1. return true
// ===> 2. else
// ========> 1. return false
// 5. return result

var kidsWithCandies = function (candies, extraCandies) {
  const maxNumOfCandies = Math.max(...candies);
  const result = candies.map((currentKidCandies) => {
    return currentKidCandies + extraCandies >= maxNumOfCandies ? true : false;
  });
  return result;
};

// Problem link: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
