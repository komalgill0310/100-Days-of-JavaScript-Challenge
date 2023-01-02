// How to use Switch Statement instead of If...else

// => The switch (true) pattern as an alternative to if...else is especially useful if you want to utilize the fall-through behavior.

function dartsScoring(x, y) {
  const R = Math.hypot(x, y);
  switch (true) {
    case R > 5 && R <= 10:
      return 1;
    case R > 1 && R <= 5:
      return 5;
    case R <= 1:
      return 10;
    default:
      return 0;
  }
}
