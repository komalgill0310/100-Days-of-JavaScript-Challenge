function arithmeticOperation(n) {
  const arrOfN = n.split(" ");
  if (arrOfN[1] === "+") {
    return +arrOfN[0] + +arrOfN[2];
  }
  if (arrOfN[1] === "-") {
    return +arrOfN[0] - +arrOfN[2];
  }
  if (arrOfN[1] === "*") {
    return +arrOfN[0] * +arrOfN[2];
  }
  if (arrOfN[1] === "/") {
    return +arrOfN[2] === 0 ? -1 : +arrOfN[0] / +arrOfN[2];
  }
}

// Problem link: https://edabit.com/challenge/T5MRvCGsZgk5QzCcZ
