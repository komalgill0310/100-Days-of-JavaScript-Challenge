function group(arr, size) {
  function createSubArrInsideParentArr() {
    let parentArr = [];
    const numOfSubArr = Math.round(arr.length / size);
    for (let i = 0; i < numOfSubArr; i++) {
      parentArr.push([]);
    }
    return parentArr;
  }
  function groupArrNum() {
    let k = 0;
    const parentArr = createSubArrInsideParentArr();
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < parentArr.length; j++) {
        if (k < arr.length) {
          parentArr[j][i] = arr[k];
          k++;
        }
      }
    }
    return parentArr;
  }
  return groupArrNum();
}

//Problem link: https://edabit.com/challenge/w5LTwJwDLK4uQ3Dmv
