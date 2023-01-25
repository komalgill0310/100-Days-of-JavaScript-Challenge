function sub(A1, A2) {
  let subArr = [];
  for (let i = 0; i < A1.length; i++) {
    let tempArr = [];
    for (let j = 0; j < A1.length; j++) {
      tempArr.push(A1[i][j] - A2[i][j]);
    }
    subArr.push(tempArr);
  }
  return subArr;
}

//Problem link: https://edabit.com/challenge/hAvzSvKxg2WeJ4GEw
