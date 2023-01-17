function getVodkaBottle(obj, num) {
  for (const key in obj) {
    if (obj[key] === num && key.includes("Rammstein")) return key;
  }
}

// Problem link: https://edabit.com/challenge/paMpZoEJ6gr4feMS3
