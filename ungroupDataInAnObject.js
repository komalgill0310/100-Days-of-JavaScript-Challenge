// Given: Given a grouped data in form of an array of objects
// Return: create an object of each student's data along with their teacher name

// Curren Structure of Data:
// 1. Object
// => properties: teacher
//  => data: array of object and each object is a student data

// Return Structure of Data:
// 1. Array of Object
// => each object properties would be:
// => teacher's name
// => data of student related to that teacher

// HIGH LEVEL OVERVIEW:
// 1. Check if object has a property of data
// => 1. length of that property is either 1 or More
// => IF BOTH CONDITION SATISFY
// => 1. loop through the data
// Create a new Object
// => Properties of that object would be:
// => teacher,
// => data[i]

// BREAKDOWN:
// 1. Create a variable called ungroupData to store the output of flatMap
// const ungroupData = Use flatMap to loop through an array of object
// => PARAMETERS OF Map: eachData
// INSIDE MAP:
// 1. CHECK IF eachData has a property of data and the length of data property is TRUTHY
// TOOL to check if object has a property: hasOwnProperty
// => 1. Use another MAP method to loop through the data
// =>   PARAMETER OF SECOND MAP: student
// QUESTION: HOW TO CREATE AN OBJECT IN THE EXPECTED FORM?
// => 2. Create an object inside SECOND MAP method
// => PROPERTIES OF THAT OBJECT WOULD BE:
// {teacher: eachData.teacher,
// ...student}

function ungroupStudents(students) {
  const ungroupData = students.flatMap((eachData) => {
    if (eachData.hasOwnProperty("data") && eachData.data.length) {
      return eachData.data.map((student) => ({
        teacher: eachData.teacher,
        ...student,
      }));
    }
  });
  return ungroupData;
}

// BETTER VARIABLE could have been: ungroupedStudents
