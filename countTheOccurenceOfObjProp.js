// loop through the obj
// store the current obj's prop in a variable
// call function countObjProperty and pass it a variable which hold the current value of the obj property and the object itself
// this function will loop through the obj again and will check if the obj property === the parameter of the function
// if it is equal, count ++
// this function will return count
// in the parent function, create an obj outside of the loop
// create that obj property inside the loop only if the object key's value does not exist in the new obj
//  key of new obj will be the variable which we passed to that function
// and its value will be the value returned from the countObjProperty function

function countNumberOfOccurrences(obj) {
  let countObjProperty = {};
  for (let key in obj) {
    let temp = obj[key];
    if (!countObjProperty.hasOwnProperty(temp)) {
      countObjProperty[temp] = countObjProp(temp, obj);
    }
  }
  return countObjProperty;
}

function countObjProp(objValue, obj) {
  let count = 0;
  for (let key in obj) {
    if (obj[key] == objValue) {
      count++;
    }
  }
  return count;
}

// UPDATE SOLUTION

function countNumberOfOccurrences(obj) {
  let count = {};
  for (let key in obj) {
    let countKey = obj[key];
    !count.hasOwnProperty(obj[key])
      ? (count[countKey] = 1)
      : (count[countKey] += 1);
  }
  return count;
}
