function colorPatternTimes(cols) {
  const totalTimeToDraw = cols.length * 2;
  const totalTimeToChangePencil = cols
    .slice(1)
    .reduce((a, c, i) => a + (c != cols[i] ? 1 : 0), 0);
  return totalTimeToDraw + totalTimeToChangePencil;
}

// Problem link: https://edabit.com/challenge/Np7R8F24PaqBShZc5
