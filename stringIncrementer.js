function incrementString(str) {
  if (!Number(str.slice(-1))) {
    return str + 1;
  } else {
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "0") {
        const number = str.slice(i);
        const addOne = Number(number) + 1;
        if (number.length === String(addOne).length) {
          return str.slice(0, i) + addOne;
        }
        return str.slice(0, i) + String(addOne).padStart(number.length, 0);
      }
    }
  }
}
// Problem link: https://edabit.com/challenge/4cKsMQnxaA7APdeg4
