function sumDigit(positiveInteger) {
  return String(positiveInteger)
    .split("")
    .reduce((acc, v) => acc + Number(v), 0);
}

// Problem link: https://edabit.com/challenge/qQisvy6FCgvPuMpWz
