// Breakdown:
// 1. convert given value of hour and mintues to seconds
// ==> 1. create a variable called hourToSeconds and store the output of converting hour to seconds
// ==> 2. Create a variable called minutesToSeconds and store the output of converting minutes to seconds
// 2. Use Math.max and pass three parameters such as hourToSeconds, minutesToSeconds, s and the store the output in a variable called longestDuration
// 4. Check if longestDuration/(second*second) === h
// ==> return h
// 5. else if longestDuration/second === m
// ==> return m
// 6. else Return longestDuration

function longestTime(h, m, s) {
  const second = 60;
  const hourToSeconds = h * second * second;
  const minutesToSeconds = m * second;
  const longestDuration = Math.max(hourToSeconds, minutesToSeconds, s);
  if (longestDuration / (second * second) === h) {
    return h;
  } else if (longestDuration / second === m) {
    return m;
  } else {
    return longestDuration;
  }
}

// Problem link: https://edabit.com/challenge/9fpBX9AFizhDeFk8R
