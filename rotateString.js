var rotateString = function (s, goal) {
  if (s === goal) return true;
  for (let i = 1; i < s.length; i++) {
    let updatedStr = s.slice(i) + s.slice(0, i);
    if (updatedStr === goal) {
      return true;
    }
  }
  return false;
};

// Problem link: https://leetcode.com/problems/rotate-string/description/
