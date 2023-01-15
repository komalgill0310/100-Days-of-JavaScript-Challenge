function numInStr(arr) {
  return arr.filter(
    (str) => str.split("").filter((ch) => Number(ch)).length > 0
  );
}

// Problem link: https://edabit.com/challenge/eCPim4XcssdZdvs32
