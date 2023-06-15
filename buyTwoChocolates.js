var buyChoco = function (prices, money) {
  prices.sort((a, b) => a - b);
  const [chocOnePrice, chocTwoPrice] = prices;
  const totalPrice = chocOnePrice + chocTwoPrice;
  return chocOnePrice + chocTwoPrice <= money ? money - totalPrice : money;
};

// Problem link: https://leetcode.com/problems/buy-two-chocolates/
