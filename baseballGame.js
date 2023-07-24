var calPoints = function (operations) {
  const x = [];
  operations.map((operation) => {
    switch (operation) {
      case "C":
        x.splice(-1);
        break;

      case "D":
        x.push(2 * x.slice(-1));
        break;

      case "+":
        const sum = x.slice(-2).reduce((total, curr) => total + curr, 0);
        x.push(sum);
        break;

      default:
        x.push(Number(operation));
        break;
    }
  });
  return x.reduce((total, curr) => total + curr, 0);
};

// Problem link: https://leetcode.com/problems/baseball-game/description/
