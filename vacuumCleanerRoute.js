// Breakdown:
// 1. Create an empty object called routeFreqCounter
// 2. IF ROUTES.LENGTH === 2
// ===> 1. IF (routes.includes("L") && routes.includes("R")) ||
// (routes.includes("U") && routes.includes("D"))
// ? true
// : false;
// 2. if LENGTH IS > 2
// ===> 1. Use for...of loop to loop over the given string
// ========> 1. for each ch in object = if it is avaible in object, then increment its value otherwise, add that character as a property to the object and the value of the new property would be 1.
// ===> 2. Store all of the object's values properties in an array called routeFreq
// ===> 3. Use array's every method on routeFreq to check if the all of the array's values are divisible by 2 ? true : false

function isVacuumReturnsToOriginalPosition(routes) {
  if (routes.length === 2) {
    return (
      (routes.includes("L") && routes.includes("R")) ||
      (routes.includes("U") && routes.includes("D"))
    );
  }
  const routeFreqCounter = {};
  for (const route of routes) {
    routeFreqCounter[route] = (routeFreqCounter[ch] || 0) + 1;
  }
  const routeFreq = Object.values(routeFreqCounter);
  return routeFreq.every((route) => route % 2 === 0);
}

// Problem: Given a string representing the sequence of moves a robot vacuum makes, return whether or not it will return to its original position. The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.

// Ex: Given the following strings...

// "LR", return true
// "URURD", return false
// "RUULLDRD", return true

// if (
//   (routes.includes("L") && routes.includes("R")) ||
//   (routes.includes("U") && routes.includes("D"))
// ) {
//   return true;
// }
// else{
//   return false
// }
