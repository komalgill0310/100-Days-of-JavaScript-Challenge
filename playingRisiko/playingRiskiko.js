function risiko(att, def) {
  let armyLostByDefender = 0;
  const sortAttackerArr = att.sort((a, b) => b - a);
  const sortDefenderArr = def.sort((a, b) => b - a);
  for (let i = 0; i < sortAttackerArr.length; i++) {
    if (sortAttackerArr[i] > sortDefenderArr[i]) {
      armyLostByDefender++;
    }
  }
  return armyLostByDefender;
}

//How to solve using reduce

function risiko(att, def) {
  const sortAttackerArr = att.sort((a, b) => b - a);
  const sortDefenderArr = def.sort((a, b) => b - a);
  return sortAttackerArr.reduce(
    (acc, curr, i) => (curr > sortDefenderArr[i] ? (acc = acc + 1) : acc),
    0
  );
}
