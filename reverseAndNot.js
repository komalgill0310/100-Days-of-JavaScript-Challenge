function reverseAndNot(i) {
  const strSplitNum = String(i).split("");
  const reverseAndNotStrNum = `${strSplitNum.reverse().join("")}${i}`;
  return Number(reverseAndNotStrNum);
}

// Problem link: https://edabit.com/challenge/moK78CirzYbqk6g3z
