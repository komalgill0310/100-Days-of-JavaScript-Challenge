function dial(str) {
  let strToPhoneNumber = "";
  for (let i = 0; i < str.length; i++) {
    if (/[a-z]/gi.test(str[i])) {
      if (/[abc]/gi.test(str[i])) strToPhoneNumber += 2;
      if (/[def]/gi.test(str[i])) strToPhoneNumber += 3;
      if (/[ghi]/gi.test(str[i])) strToPhoneNumber += 4;
      if (/[jkl]/gi.test(str[i])) strToPhoneNumber += 5;
      if (/[mno]/gi.test(str[i])) strToPhoneNumber += 6;
      if (/[pqrs]/gi.test(str[i])) strToPhoneNumber += 7;
      if (/[tuv]/gi.test(str[i])) strToPhoneNumber += 8;
      if (/[wxyz]/gi.test(str[i])) strToPhoneNumber += 9;
    } else {
      strToPhoneNumber += str[i];
    }
  }
  return strToPhoneNumber;
}

// Problem link: https://edabit.com/challenge/2Ybd7gvXJQd5h5CMH
