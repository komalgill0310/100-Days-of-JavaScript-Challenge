// Step1 => UnderStand the problem
// 1. Two arrays
// => First Array =>
// ==> 1. Length of array = number of children
// ==> 2. array[i] = how many cookie the child atleast need to satisfy its hunger
// => Second Array =>
// ==> 1. Length of array = total number of cookies
// ==> 2. array[j] = size of the cookie

// In General: Return how many values from cookies data array >= values for desire of cookies data

// 2. Output:
// ==> Return how many children can you make them satisfy by fulfilling their desire for cookies.

// Breakdown:
// 1. Create a variable called "maxNumOfChildrenContent" and initialize it to 0
// 2. const arr = g.length > s.length ? g : s
// 2. Use for loop to loop through an array which has the smaller size
// 3. Check if i > desire of cookie for each children.length
// ==> return maxNumOfChildrenContent
// 4. if (g.slice(i).find(desiredCookies => s[i] >= desiredCookies))
// =====> maxNumOfChildrenContent++
// 5. return maxNumOfChildrenContent

// another function to return an array which has smaller length

var findContentChildren = function (g, s) {
  let maxNumOfChildrenContent = 0;
  const smallerLengtharr = g.length < s.length ? g : s;
  const biggerLengthArr = smallerLengtharr === g ? s : g;
  for (let i = 0; i < smallerLengtharr; i++) {
    if (
      biggerLengthArr
        .slice(i)
        .find((desiredCookies) => smallerLengtharr[i] >= desiredCookies)
    ) {
      maxNumOfChildrenContent++;
    }
  }
  return maxNumOfChildrenContent;
};

// SOME TEST CASES ARE FAILING => YET TO FIGURE OUT

// Problem link: https://leetcode.com/problems/assign-cookies/
