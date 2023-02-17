// Input: An Array of object with properties of name and quantity

// Output: Return an array of object in the order they are provided but the quantity for each object should be one. Meaning create a new object the quantity is more than one and then add that object into an array.

// Breakdown:
// 1. Use for loop to loop through an array of object
// Parameters: i = 0; i < arr of object; i++
// ==> 1. Check if quantity of currObj is more than one
// =====> Create a new obj and with the name of the currObj and quantity would be one and store it in a variable called "splitBunch"
// =====> Subtract one from the quantity of an obj
// =====> Push the object into an array using splice at next position of the current object by adding 1 to i
// =====> Decrement i by one
// WHY: because splice updates the original array
// 2. Return the original array from the function

// Convert logic into code:
// 1. for(let i = 0; i < arr.length; i++){
//      if(arr[i].quantity > 1){
//    const splitBunch = {name: arr[i].quantity, quantity: 1}
//     bunches[i].quantity--
//     arr.splice(i+1, 0, obj)
//     i--
// }
// }
// return original array

// Question:
// 1. How to add the object at specific place of an array rather than at the end?
// => using SPLICE METHOD

function splitBunches(bunches) {
  for (let i = 0; i < bunches.length; i++) {
    if (bunches[i].quantity > 1) {
      const splitBunch = { name: bunches[i].name, quantity: 1 };
      bunches[i].quantity--;
      bunches.splice(i + 1, 0, splitBunch);
      i--;
    }
  }
  return bunches;
}
