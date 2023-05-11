var compose = function (functions) {
  return function (x) {
    if (functions.length === 0) return x;
    const composition = functions
      .reverse()
      .reduce((_, curr) => (x = curr(x)), 0);
    return composition;
  };
};

// Problem link: https://leetcode.com/problems/function-composition/description/?utm_campaign=PostD7&utm_medium=Post&utm_source=Post&gio_link_id=4PY7wZM9
