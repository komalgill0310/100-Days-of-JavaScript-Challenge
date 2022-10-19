function zeroesToEnd(a) {
  const nonZeroArr = a.filter((num) => num != 0);
  const zeroItemArr = a.filter((num) => num === 0);
  return nonZeroArr.concat(zeroItemArr);
}

//However, the above solution does not mutate(change the original array)

//Goal: Write a solution which change the original array and does not return the new Array.

function zeroesToEnd(a) {
  let numOfZero = 0;
  while (a.includes(0)) {
    a.splice(a.indexOf(0), 1);
    numOfZero++;
  }
  while (numOfZero > 0) {
    a.push(0);
    numOfZero--;
  }
  return a;
}

//Time to Solve: 55Min
