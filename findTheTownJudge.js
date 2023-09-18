var findJudge = function (n, trust) {
  const possibleJudge = trust.map((subTrust) => subTrust[1]);
  const judge = possibleJudge[0];
  return possibleJudge.every((person) => person === judge) ? judge : -1;
};

// Problem link: https://leetcode.com/problems/find-the-town-judge/
