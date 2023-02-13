// Given: An array of comma seperated strings
// Return: How many Unique styles are available in the album?

// BREAKDOWN:
// FIRST PART: Convert the comma seperated strings into their own in order to check if the comma seperated string contain any duplicates.
// 1. Use flatMap to loop through the string and store the result in a variable called "splitAlbums"
// PARAMETERS: current string => str
// 2. Use split() on each string in order to convert the comma seperated string into their own.
// THE REASON i AM USING FLATMAP, because split method return the result in form of an array.
// EXPECTED OUTPUT: ["Dub", "Dancehall", "Industrial", "Heavy"] and so on
// ACTUAL OUTPUT: as expected

// SECOND PART: Find out the unique string values and return the total number
// TOOL: Set()
// 1. use Set object method on the splitAlbums in order to find out the unique string values in an array and store the result in a variable called "uniqueAlbums"
// => const uniqueAlbums = new Set(splitAlbums)
// 2. Use .size property on uniqueAlbums in order to get the size of the object.
// => return uniqueAlbums.size

function uniqueStyles(albums) {
  const splitAlbums = albums.flatMap((str) => str.split(","));
  const uniqueAlbums = new Set(splitAlbums);
  return uniqueAlbums.size;
}
