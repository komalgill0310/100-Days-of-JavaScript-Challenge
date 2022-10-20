function changeTypes(arr) {
  return arr.map((item) => {
    if (typeof item === "string")
      return item.charAt(0).toUpperCase() + item.slice(1) + "!";
    if (typeof item === "boolean") return !item;
    return item % 2 === 0 ? item + 1 : item;
  });
}

//Time to Solve: 14Min
