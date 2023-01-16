function doesTriangleFit(brick, hole) {
  return brick[0] + brick[1] > brick[2]
    ? brick.every((side, i) => side < hole[i] || side === hole[i])
    : false;
}

// Problem link: https://edabit.com/challenge/7e2Aq87tDpW2CK7XH
