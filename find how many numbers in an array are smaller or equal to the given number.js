function maxItems(prices, budget) {
  let sum = 0,
    count = 0;
  const pricesArr = prices.map((price) => +price.slice(1));
  const priceLessThanBudget = pricesArr
    .filter((price) => price <= +budget.slice(1))
    .sort((a, b) => a - b);
  for (let i = 0; i < priceLessThanBudget.length; i++) {
    sum = sum + priceLessThanBudget[i];
    if (sum <= +budget.slice(1)) {
      count++;
    }
  }
  return count ? count : "Not enough funds!";
}

// Problem link: https://edabit.com/challenge/KTrcDJkkW9inXesDy
