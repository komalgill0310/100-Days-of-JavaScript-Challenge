function fibSeq(end) {
  if (end === 0) return [];
  else if (end > 0) {
    let arr = Array(end);
    for (let i = 0; i < arr.length; i++) {
      if (i > 1) {
        arr[i] = arr[i - 1] + arr[i - 2];
      } else {
        arr[i] = i;
      }
    }
    return arr;
  } else {
    return undefined;
  }
}
