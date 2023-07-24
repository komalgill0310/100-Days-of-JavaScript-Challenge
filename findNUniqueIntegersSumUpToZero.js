var sumZero = function (n) {
  const ans = n % 2 === 0 ? [] : [0];
  for (let i = 1; ans.length < n; i++) {
    ans.push(i, -i);
  }
  return ans;
};

// Problem link: https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
