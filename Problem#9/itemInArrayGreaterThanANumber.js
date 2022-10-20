function probability(arr, num) {
  const numOfFavOutcome = arr.reduce((a, c) => a + (c >= num ? 1 : 0), 0);
  const percentProbOfEvent = (100 * numOfFavOutcome) / arr.length;
  return +percentProbOfEvent.toFixed(1);
}

//Time to Solve: 12Min
