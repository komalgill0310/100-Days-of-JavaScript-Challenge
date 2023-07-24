var maximumUnits = function (boxTypes, truckSize) {
  let totalUnitsOnTruck = 0;
  let totalBoxes = 0;

  boxTypes.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < boxTypes.length; i++) {
    let [numOfBoxes, numOfUnitsPerBox] = boxTypes[i];
    while (numOfBoxes != 0 && totalBoxes < truckSize) {
      totalBoxes++;
      totalUnitsOnTruck += numOfUnitsPerBox;
      numOfBoxes--;
    }
  }

  return totalUnitsOnTruck;
};

// Problem link: https://leetcode.com/problems/maximum-units-on-a-truck/
