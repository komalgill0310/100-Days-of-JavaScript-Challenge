// Create a function to return the total number of boomerangs.

function countBoomerangs(arr) {
  let numberOfBoomerangs = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] === arr[i + 1] && arr[i] != arr[i - 1]) {
      numberOfBoomerangs++;
    }
  }
  return numberOfBoomerangs;
}

//Time to Solve: 45Min
