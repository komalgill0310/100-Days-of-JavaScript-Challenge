var lastStoneWeight = function (stones) {
  for (let i = 0; i < stones.length; i++) {
    if (stones.length === 1) return stones[0];
    // FIRST MAXIMUM NUMBER
    const y = Math.max(...stones);
    const yIndex = stones.indexOf(y);
    stones.splice(yIndex, 1);

    // SECOND MAXIMUM NUMBER
    const x = Math.max(...stones);
    const xIndex = stones.indexOf(x);
    stones.splice(xIndex, 1);

    // Decrement i in order to start looping from the Start
    i--;

    x != y ? stones.push(y - x) : stones.push(0);
  }
};

// Problem link: https://leetcode.com/problems/last-stone-weight/
