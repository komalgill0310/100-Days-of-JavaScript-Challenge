// given: an array of objects
// Return: the name of the wine which the person will buy

// BREAKDOWN:
// => 1. IF the array is empty => return null
// => 2. IF the array's length is 1 => return the value of the name property in an object.
// => 3. IF array's length is > 1
//  => 1. find the second last minimum price and return the value for the name key of that object.
// HIGH LEVEL OVERVIEW:
// 1. SORT THE object in an array in ascending order
// 2. RETURN THE value of the name key from second object.

// HOW TO?
// 1. Can I use sort() method to sort an object
// REMEMBER: SORT()  will modify the original Array
// 2. arr.sort((a, b) => b.price - a.price)
// 3. return the name value of the second item of an array
// => return wines[1].name

function chosenWine(wines) {
  if (!wines.length) return null;
  if (wines.length === 1) return wines[0].name;
  if (wines.length > 1) {
    wines.sort((a, b) => a.price - b.price);
    return wines[1].name;
  }
}
