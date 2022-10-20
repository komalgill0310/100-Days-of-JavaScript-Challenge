function simonSays(arr1, arr2) {
  return arr2.slice(1).every((item, index) => item === arr1[index]);
}

//Time to Solve: 11Min
