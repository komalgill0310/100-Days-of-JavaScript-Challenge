function flatten(arr) {
  if (arr.every((value) => !Array.isArray(value))) {
    return arr;
  } else {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr = newArr.concat(arr[i]);
    }
    return flatten(newArr);
  }
}

// Problem link: https://edabit.com/challenge/2oMTwjqmmXD8XBuMn
