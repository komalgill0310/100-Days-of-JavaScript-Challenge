function availableSpots(arr, num) {
  let likedSpots = 0;
  const addNumToArr = arr.slice(1).map((c, i) => [arr[i], num, c]);
  for (let subArr of addNumToArr) {
    if (num % 2 === 0) {
      likedSpots =
        subArr[0] % 2 === 0 && subArr[2] % 2 === 0
          ? likedSpots + 1
          : likedSpots;
    }
    if (num % 2 != 0) {
      likedSpots =
        subArr[0] % 2 != 0 && subArr[2] % 2 != 0 ? likedSpots + 1 : likedSpots;
    }
    likedSpots =
      (subArr[0] % 2 === 0 && subArr[2] % 2 != 0) ||
      (subArr[0] % 2 != 0 && subArr[2] % 2 === 0)
        ? likedSpots + 1
        : likedSpots;
  }
  return likedSpots;
}

//Problem link: https://edabit.com/challenge/975ac5gm3hAwYqqjS
