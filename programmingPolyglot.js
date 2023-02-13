// Given: an integer is given
// Return: Find the number from the given table which adds up to the given number and then return the value at that point in an array.

// BREAKDOWN:
// FIRST GOAL: find out the numbers which are lesser than the given number and store them in an array.
// 1. STORE The points and language in an two different arrays
// => const points = all of the points
// => const languages = all of the languages
// 2. Create an empty array and store it in a variable called "proficientLanguages" to store the output
// => const proficientLanguages = []
// 3. Check IF num exist in the array => use includes to check
// ==>  proficientLanguages.push(points[i])
// ==>  return proficientLanguages
// 4. Use for loop on points Arr to map through the array
// => PARAMETERS OF MAP WOULD BE -> i = points.length - 1; i > 0; i--
// INSIDE FOR METHOD:
// => 2. Check IF the given point in an array is lesser than the given NUM
// ==> num = givenNum - points[i]
// ==> proficientLanguages.push(points[i])
// ==> USE RECURSION to find all of the number until the given num is not included in the points array.
// ==> if pointsArr includes num
// ====> proficientLang.push(index of num)
// ====> return proficientLang
// ==> else
// ===> call the function with the updated argument => getLanguages(num)

// SECOND PART: By using the index from the proficientLang, get the languages at that index from the languages array
// BREAKDOWN:
// 1. Store the lang by using the index of the num in a variable called languageIndex
// => const languageIndex = points.indexOf(num)
// 2. Update this line from the above part of the code:
// => proficientLanguages.push(languages[languageIndex])
// 3. Update this part of the code(Line#23):
// => return proficientLang.map(langIndex => languages[langIndex]).sort()

function getLanguages(num) {
  const points = [1, 2, 4, 8, 16, 32, 64, 128];
  const languages = [
    "C#",
    "C++",
    "Java",
    "JavaScript",
    "PHP",
    "Python",
    "Ruby",
    "Swift",
  ];
  const proficientLang = [];
  if (points.includes(num)) {
    const languageIndex = points.indexOf(num);
    proficientLang.push(languages[languageIndex]);
    return proficientLang;
  }
  for (let i = points.length - 1; i > 0; i--) {
    if (num > points[i]) {
      num = num - points[i];
      proficientLang.push(i);
      if (points.includes(num)) {
        proficientLang.push(points.indexOf(num));
        return proficientLang.map((langIndex) => languages[langIndex]).sort();
      } else {
        getLanguages(num);
      }
    }
  }
}
