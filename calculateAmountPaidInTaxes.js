var calculateTax = function (brackets, income) {
  if (!income) return 0.0;
  const taxDollars = [];
  const upperBounds = brackets.map((bracket) => bracket[0]);
  const taxPercentages = brackets.map((bracket) => bracket[1]);
  let prev = 0;
  for (let i = 0; i < upperBounds.length; i++) {
    const upper = Math.min(upperBounds[i], income) - prev;
    upper > 0 && taxDollars.push(upper);
    prev = upperBounds[i];
  }
  return taxDollars.reduce(
    (total, taxDollar, i) => total + (taxDollar * taxPercentages[i]) / 100,
    0
  );
};

// Problem link: https://leetcode.com/problems/calculate-amount-paid-in-taxes/
