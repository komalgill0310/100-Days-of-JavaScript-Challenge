var createCounter = function (init) {
  let originalInit = init;
  return {
    increment: function () {
      return ++originalInit;
    },
    reset: function () {
      originalInit = init;
      return originalInit;
    },
    decrement: function () {
      return --originalInit;
    },
  };
};

// Problem link: https://leetcode.com/problems/counter-ii/?utm_campaign=DailyD3&utm_medium=Email&utm_source=Daily&gio_link_id=1R3l3ErP
