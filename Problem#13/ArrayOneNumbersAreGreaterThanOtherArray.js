function winRound(you, opp) {
  const you1 = you.sort((a, b) => a - b);
  const opp1 = opp.sort((a, b) => a - b);
  return (
    you1.slice(-1) + you1.slice(-2, -1) > opp1.slice(-1) + opp1.slice(-2, -1)
  );
}
