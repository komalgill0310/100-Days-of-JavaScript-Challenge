var busyStudent = function (startTime, endTime, queryTime) {
  let numOfStudents = 0;
  for (let i = 0; i < startTime.length; i++) {
    numOfStudents += queryTime >= startTime[i] && queryTime <= endTime[i] && 1;
  }
  return numOfStudents;
};

// Problem link: https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/
