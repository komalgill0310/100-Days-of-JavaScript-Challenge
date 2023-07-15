var answerQueries = function (nums, queries) {
  const answer = Array(queries.length).fill(0);
  nums.sort((a, b) => a - b);
  console.log(nums);
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    let sum = 0,
      count = 0;
    for (let j = 0; j < nums.length; j++) {
      sum += nums[j];
      if (sum <= query) {
        count++;
      }
    }
    answer[i] = count;
  }
  return answer;
};

// Problem link: https://leetcode.com/problems/longest-subsequence-with-limited-sum/description/
