function isObject(value) {
  return typeof value === "object" && value != null ? true : false;
}

// OR

function isObject(value) {
  return value instanceof Object;
}

// Problem link: https://edabit.com/challenge/5xrKJPsXLG3czFpuq
