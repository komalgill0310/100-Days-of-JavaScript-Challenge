var capitalizeTitle = function (title) {
  return title
    .split(" ")
    .map((word) =>
      word.length > 2
        ? word[0].toUpperCase() + word.slice(1).toLowerCase()
        : word.toLowerCase()
    )
    .join(" ");
};

// Problem link: https://leetcode.com/problems/capitalize-the-title/description/
