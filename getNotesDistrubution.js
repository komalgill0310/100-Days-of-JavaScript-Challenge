// High level overview:
// 1. Create an empty array called notes
// 2. Create an array with the valid notes and store it in a variable called "validNotes"
// 3. Loop through the given array of object
// 4. concat all the notes in the notes array
// 5. Create an empty object called notesDistribution
// 6. Loop through notes array check if the note is valid
// ==> 1. if the note exist in the notesDistribution obj
// ====> increment the value of the key
// ==> 2. else
// ====> create a new key in the object with the valid note and set its value to one.
// 7. Return the notesDistribution

// Puzzle piece#1: SOLVED
// Question: How to concat the object's notes values in an newly created array called "notes"
// 1. Loop through an array of object using for of loop
// 2. Check if the object has a property of notes using hasOwnProperty method by passing a property name
// ==> 1. update the empty array of notes by concatenating the values of the notes array and store that in a variable called notes

// Puzzle piece#2: SOLVED
// Question: loop through notes array, check if the note is valid
// 1. Use filter on the notes Array and store the output in a variable called "studentsValidNotes"
// ===> 1. For each note value, check if the note is includes in the validNotes array using includes method
// 2. Console the output of the filter to check if it is the desired output.

// Puzzle piece#3:SOLVED
// Question: How to count the number of notes present in a studentsValidNotes and the return the count in a required format?
// 1. Create an object called notesDistribution
// 2. Loop through an array called studentsValidNotes using for...of loop
// 3. check if the current value exist as a key inside the notesDistribution object
// ==> 1. increment the current value of the key by 1
// 4. else
// ==> set the key as the current value of the note and set key's value to 1

function getNotesDistribution(students) {
  let notes = [];
  const notesDistribution = {};
  const validNotes = [1, 2, 3, 4, 5];
  for (const student of students) {
    if (student.hasOwnProperty("notes")) {
      notes = notes.concat(student["notes"]);
    }
  }
  const studentsValidNotes = notes.filter((note) => validNotes.includes(note));

  for (const note of studentsValidNotes) {
    if (notesDistribution.hasOwnProperty(note)) {
      notesDistribution[note]++;
    } else {
      notesDistribution[note] = 1;
    }
  }
  return notesDistribution;
}

// Problem link: https://edabit.com/challenge/WyEL2YcemhrS4waEE
