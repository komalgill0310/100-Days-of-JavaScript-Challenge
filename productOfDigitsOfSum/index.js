function sumDigProd(...num) {
  const arrOfNumbers = [...num];
  let sumOfArrayNumbers = arrOfNumbers.reduce((a, c) => a + c, 0);
  if (sumOfArrayNumbers.toString().length === 1) return sumOfArrayNumbers;
  else {
    while (sumOfArrayNumbers.toString().length != 1) {
      sumOfArrayNumbers = sumOfArrayNumbers
        .toString()
        .split("")
        .reduce((a, c) => a * parseInt(c), 1);
    }
    return sumOfArrayNumbers;
  }
}
