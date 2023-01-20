function product(x, y) {
  function timesOne(a, b) {
    function timesTwo(i, j) {
      return x * a * i + y * b * j;
    }
    return timesTwo;
  }
  return timesOne;
}

//Problem link: https://edabit.com/challenge/95YiRnBSnfzSQWAuu
