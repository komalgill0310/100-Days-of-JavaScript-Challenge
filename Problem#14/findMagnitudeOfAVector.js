var magnitude = (vector) =>
  vector.length &&
  Math.sqrt(vector.map((num) => num * num).reduce((acc, curr) => acc + curr));

//Time to Solve: 16Min
