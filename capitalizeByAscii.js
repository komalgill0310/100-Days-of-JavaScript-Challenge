function asciiCapitalize(str) {
  let asciiCapitalizeStr = "";
  for (let i = 0; i < str.length; i++) {
    const asciiCode = str.charCodeAt(i);
    asciiCapitalizeStr +=
      asciiCode % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
  }
  return asciiCapitalizeStr;
}

// Problem link: https://edabit.com/challenge/KPENunE3uhBcmSQ7C
