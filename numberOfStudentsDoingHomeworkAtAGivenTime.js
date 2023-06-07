var busyStudent = function (startTime, endTime, queryTime) {
  let studentCount = 0;
  for (let i = 0; i < startTime.length; i++) {
    studentCount += queryTime >= startTime[i] && queryTime <= endTime[i] && 1;
  }
  return studentCount;
};

// Problem link: https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/
