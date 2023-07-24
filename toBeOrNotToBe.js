var expect = function (val) {
  return {
    toBe: function (value) {
      if (val === value) {
        return true;
      } else {
        throw Error("Not Equal");
      }
    },
    notToBe: function (value) {
      if (val !== value) {
        return true;
      } else {
        throw Error("Equal");
      }
    },
  };
};

// Problem link: https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript
