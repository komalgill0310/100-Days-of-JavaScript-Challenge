var countSeniors = function (details) {
  const ageIndex = 11;
  const age = details.map((detail) => {
    return detail.slice(ageIndex, -2);
  });
  return age.filter((personAge) => personAge > 60).length;
};

// Problem: https://leetcode.com/problems/number-of-senior-citizens/description/
