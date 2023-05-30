// Breakdown:
// 1. Create a function to calculate the total score for each player.
// ===> 1. use reduce to calculate the total score.
// ===> 2. Check inside reduce if the previous value is equal to 10
// ========> 1. Then the value would be: 2*value
// ===> 3. else
// ========> 1. value would be equals to original value.
// 2. Create a variable called playerOneScore = calculateScore(player1)
// 3. Create a variable called playerTwoScore = calculateScore(player2)
// 4. return playerOneScore === playerTwoScore ? 0 : playerOneScore > playerTwoScore ? playerOneScore: playerTwoScore

var isWinner = function (player1, player2) {
  const playerOneScore = calculateScore(player1);
  const playerTwoScore = calculateScore(player2);
  console.log(playerOneScore, playerTwoScore);
  if (playerOneScore > playerTwoScore) {
    return 1;
  } else if (playerTwoScore > playerOneScore) {
    return 2;
  } else {
    return 0;
  }
};

function calculateScore(player) {
  let totalScore = 0;
  for (let i = 1; i <= player.length; i++) {
    if (player[i - 1] === 10) {
      totalScore =
        totalScore +
        player[i - 1] +
        player.slice(i, i + 2).reduce((acc, curr) => acc + 2 * curr, 0);
      i += 2;
    } else {
      totalScore += player[i - 1];
    }
  }
  return totalScore;
}

// Problem link: https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/
