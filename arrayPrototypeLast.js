// the reason parameter did not passed to the function, as becaused the last method is getting used as an object to the Array.

Array.prototype.last = function () {
  return this.length ? this.slice(-1) : -1;
};

// Problem link: https://leetcode.com/problems/array-prototype-last/description/
