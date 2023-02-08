// Given: an object with nested objects and a string

// Return: return the same obj and update the signature proptery of the NESTED object  &  for the object property at the root level with the value of the string.

// Breakdown:
// Question:
// 1. How can I loop through the nested object?
// Answer: for...in loop
// 2. How to check if the nested object contain "signature" property?
// Answer: Object.hasOwnProperty

// FIRST PART: UPDATE THE PROPERTY OF THE "signature" key at the root level
//1. use for...in to loop through the object
//1. if property === "signature"
// => object[property] = given string

// SECOND PART: Update the property of the object which is at the nested level
//Question: will "Object.hasOwnProperty(property name)" will check for the nested object as well? => NO

// hOW WILL i CHECK FOR THE NESTED PROPERTY?
// Breakdown:
// 1. inside for...in loop, I check if the property'value is an object using "typeof operator"
// NOTE: the property itself will always be a string, so make sure you CHECK FOR THE VALUE OF THE PROPERTY not THE PROPERTY ITSELF
// => if it is => then update the obj[property].signature value = given string

// once the property has updated at all levels, RETURN THE given OBJECT.

// TO MAKE THE CODE MORE CONCISE, i CAN USE ternary operator
//	for(let property in obj){
//   obj[property].hasOwnProperty("signature") ?
//   obj[property].signature = name :
//   obj["signature"] = name
// }

function signAll(obj, name) {
  for (let property in obj) {
    obj[property].hasOwnProperty("signature")
      ? (obj[property].signature = name)
      : (obj["signature"] = name);
  }
  return obj;
}

// Issue: current solution only checks if the nesting is at one level down.
// However, the solution fails if there are multiple level nesting?

// Sub-Problem: Update the "signature" property at all nested levels of the object.

// RECURSION would be the solution to the given problem.

// BREAKDOWN:
// 1. USE A for...in loop to loop through the object.
// 2. check if the typeof obj[prop] === "object"
// => call the function agin -> Recursion Concept
// => signAll(obj[prop], name)
// 3. if the obj[prop] is not an object
// => obj[prop] = name
// 4. RETURN obj

function signAll(obj, name) {
  for (let prop in obj) {
    if (typeof obj[prop] === "object") {
      signAll(obj[prop], name);
    } else {
      obj["signature"] = name;
    }
  }
  return obj;
}
