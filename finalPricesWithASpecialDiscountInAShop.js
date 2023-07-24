var finalPrices = function (prices) {
  const answer = [];
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      if (price >= prices[j]) {
        answer[i] = price - prices[j];
        break;
      }
    }
    if (typeof answer[i] != "number" && answer[i] != 0) answer[i] = price;
  }
  return answer;
};

// Problem link: https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
