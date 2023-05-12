// Immediately Invoked function
var once = function (fn) {
  let fnCall = 1;
  return function (...args) {
    return (() => {
      if (fnCall === 1) {
        fnCall++;
        return fn(...args);
      }
    })();
  };
};

// Problem link: https://leetcode.com/problems/allow-one-function-call/?utm_campaign=DailyD8&utm_medium=Email&utm_source=Daily&gio_link_id=4RzyEnN9

// USING Function definition

var once = function (fn) {
  let fnCall = 1;
  return function (...args) {
    function calculateValue() {
      if (fnCall === 1) {
        fnCall++;
        return fn(...args);
      }
    }
    return calculateValue();
  };
};
