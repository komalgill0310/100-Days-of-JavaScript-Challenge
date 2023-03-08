// High level Overview:
// 1. Find the maximum number of points and replace the number of poitns with "Gold"
// 2. Find the second maximum number of poitns and replace the number of poitns with "Silver"
// 3. Find the third last maximum number of poitns and replace the number of points with "Bronze"
// 4. Replace the rest of the points with "Participation"

// Steps:
// 1. create an array called maxPointsArr
// 3. Push the values of the key in an array called maxPointsArr
// 4. Sort the maxPointsArr array in descending array
// 5. loop through an object
// 6. Check if the value is equal to maxPointsArr at index 0
// ==> replace that value with "Gold"
// 7. else if the value is equal to maxPointsArr at index 1
// ==> replace that value with "Silver"
// 8. else if the value is equal to maxPointsArr at index 2
// ==> replace that value with "Bronze"
// 9. else
// ==> replace that value with "Participation"
// 10. Return the original object

function awardPrizes(names) {
  const maxPointsArr = [];
  maxPointsArr.push(...Object.values(names));
  maxPointsArr.sort((a, b) => b - a);
  for (let [key, value] of Object.entries(names)) {
    if (value === maxPointsArr[0]) {
      names[key] = "Gold";
    } else if (value === maxPointsArr[1]) {
      names[key] = "Silver";
    } else if (value === maxPointsArr[2]) {
      names[key] = "Bronze";
    } else {
      names[key] = "Participation";
    }
  }
  return names;
}

// Problem link: https://edabit.com/challenge/TkmZmXjTjiiu2iCjF
