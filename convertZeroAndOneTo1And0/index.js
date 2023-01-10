function textToNumberBinary(str) {
  const strToArr = str.split(" ");
  const zeroAndOneTo0And1 = strToArr
    .map((word) => {
      if (word.toString().toLowerCase() === "zero") return (word = 0);
      if (word.toString().toLowerCase() === "one") return (word = 1);
    })
    .join("");
  if (zeroAndOneTo0And1.length % 8 === 0) return zeroAndOneTo0And1;
  if (zeroAndOneTo0And1.length < 8) return "";
  if (zeroAndOneTo0And1.length > 8 && zeroAndOneTo0And1.length % 8 != 0) {
    const remainder = zeroAndOneTo0And1.length % 8;
    return zeroAndOneTo0And1.slice(0, zeroAndOneTo0And1.length - remainder);
  }
}


//Problem link: https://edabit.com/challenge/iKRmj2Q6GQHkAXXxf
