// Breakdown:
// 1. create a variable called "miniWin" and initialize it to 0
// 2. loop over the given ticket array
// 3. Find each charactercode value and then check if it matches with the number in the array
// ==> 1. increment the miniWin by 1
// ==> 2. break out of the loop
// 4. if miniWin >= win
// ==> return "Winner!"
// 5. else
// ==> return "Loser!"

// Puzzle#1: how to find the character code value of each string character and then compare it with the given number in the current array at index 1?
// Steps:
// 1. Store array at the ticket[i] in a variable called subTicket
// 2. store the character of strings from subTicket[0] in a variable called str
// 3. store the winning number from a subTicket[1] in a variable called miniWinNumber
// 3. Loop over the str
// 4. Find the character code of the each character from the string using String.charCodeAt(index) and the value in a variable called chCharCode
// 5. if chCharCode === miniWinNumber
// ==> 1. miniWin++
// ==> 2. break;

function lottery(ticket, win) {
  let miniWin = 0;
  for (let i = 0; i < ticket.length; i++) {
    const subTicket = ticket[i];
    const str = subTicket[0];
    const miniWinNumber = subTicket[1];
    for (let j = 0; j < str.length; j++) {
      const chCharCode = str.charCodeAt(j);
      if (chCharCode === miniWinNumber) {
        miniWin++;
        break;
      }
    }
  }
  return miniWin >= win ? "Winner!" : "Loser!";
}

// Problem link: https://edabit.com/challenge/jxxWvhfiv67P2zbTa
