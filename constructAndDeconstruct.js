// Breakdown:
// 1. Create an empty array called constructArr
// 2. Create an empty array called deconstructArr
// 3. Create an empty string and store it in a variable called constructStr
// FOR CONSTRUCT
// 4. use for loop to loop over the given string
// ===> 1. constructStr += str[i]
// ===> 2. push constructStr into constructArr
// FOR DECONSTRUCT
// 5. use for loop to loop over the given string => Start the loop from 1 till the i is < str.length
// ===> 1. slice the given string from 0 till the index of the current index in negative and store it in a variable called deconstructStr
// ===> 2. Push it into an array called deconstructArr
// 6. Create a variable called constructAndDeconstructArr and join constructArr and deconstructArr

function constructDeconstruct(str) {
  const constructArr = [];
  const deconstructArr = [];
  let constructStr = "";
  // FOR CONSTRUCT
  for (let i = 0; i < str.length; i++) {
    constructStr += str[i];
    constructArr.push(constructStr);
  }
  // FOR DESCTRUCT
  for (let i = 1; i < str.length; i++) {
    const deconstructStr = str.slice(0, -i);
    deconstructArr.push(deconstructStr);
  }
  const constructAndDeconstructArr = constructArr.concat(deconstructArr);
  return constructAndDeconstructArr;
}

//Problem link: https://edabit.com/challenge/ALy97jpKC2CPRJsYR
