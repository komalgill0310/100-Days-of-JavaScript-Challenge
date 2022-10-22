function numObj(arr) {
  return arr.map((item) => ({ [item.toString()]: String.fromCharCode(item) }));
}
