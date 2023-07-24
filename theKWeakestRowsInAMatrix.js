var kWeakestRows = function (mat, k) {
  const numSoldiersWithIndex = mat.map((position, i) => [
    position.filter((soldier) => soldier === 1).length,
    i,
  ]);
  numSoldiersWithIndex.sort((a, b) => a[0] - b[0]);
  const weakestRows = numSoldiersWithIndex.map(
    (soldiersWithPosition) => soldiersWithPosition[1]
  );
  return weakestRows.slice(0, k);
};

// Problem link: https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
