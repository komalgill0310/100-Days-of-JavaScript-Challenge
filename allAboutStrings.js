function allAboutStrings(str) {
  const arr = Array(5);
  arr[0] = str.length;
  arr[1] = str[0];
  arr[2] = str.slice(-1);
  arr[3] =
    str.length % 2 === 0
      ? str.slice(str.length / 2 - 1, str.length / 2 + 1)
      : str.slice(Math.floor(str.length) / 2, Math.floor(str.length) / 2 + 1);
  arr[4] =
    str.indexOf(str[1]) != str.lastIndexOf(str[1])
      ? `@ index ${str.lastIndexOf(str[1])}`
      : "not found";
  return arr;
}

// Problem link: https://edabit.com/challenge/5bW3TmPnae2FNvusk
