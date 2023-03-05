// Steps:
// 1. loop through an object's property
// 2. Convert each object's property value to Number,
// => 1. If any of the object's property value is not a number, then delete that property from the object.
// 3. Return the updated original object.

function findAndRemove(obj) {
  for (const prop in obj) {
    for (const [key, value] of Object.entries(obj[prop])) {
      if (isNaN(value)) {
        delete obj[prop][key];
      } else {
        obj[prop][key] = Number(value);
      }
    }
  }
  return obj;
}

// Question: How to access object key's(which has object's key-value pairs) values?
// ==> 1. obj[prop]
// Question: How to update the original object by either removing a key or updating the value of a key of an object?
// ==> 1. Get access to the object's property's key

// Problem link: https://edabit.com/challenge/MregZPPJWSxhXtrNB
