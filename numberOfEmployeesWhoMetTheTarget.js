var numberOfEmployeesWhoMetTarget = function (hours, target) {
  return hours.filter((hour) => hour >= target).length;
};

// Problem link: https://leetcode.com/problems/number-of-employees-who-met-the-target/
