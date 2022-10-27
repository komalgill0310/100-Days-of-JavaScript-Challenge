function pingPong(arr, win) {
  let copyOfArr = [].concat(arr);
  for (let i = 0; i < arr.length; i = i + 2) {
    copyOfArr.splice(i + 1, 0, "Pong!");
  }
  if (win && copyOfArr.slice(-1).toString() === "Ping!") {
    copyOfArr.push("Pong!");
  }
  return copyOfArr;
}
