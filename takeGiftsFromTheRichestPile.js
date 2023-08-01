var pickGifts = function (gifts, k) {
  for (let i = 0; i < k; i++) {
    const max = Math.max(...gifts);
    const maxIndex = gifts.indexOf(max);
    gifts.splice(maxIndex, 1, Math.floor(Math.sqrt(max)));
  }
  return gifts.reduce((total, curr) => total + curr, 0);
};

// Problem link: https://leetcode.com/problems/take-gifts-from-the-richest-pile/description/
