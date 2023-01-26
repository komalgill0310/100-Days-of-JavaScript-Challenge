function getStudentTopNotes(students) {
  //Using map and reduce
  return students.map((studentInfo) =>
    studentInfo.notes.length
      ? studentInfo.notes.reduce((a, c) => (a < c ? (a = c) : (a = a)), 0)
      : 0
  );

  //using map and Math.max
  // return students.map((studentInfo) =>
  //   studentInfo.notes.length ? Math.max(...studentInfo.notes) : 0
  // );
}

// Problem link: https://edabit.com/challenge/b7dXbWEhbr3bXCk7i
