// Input:
// 1. an array of object called "products"
// 2. Money
// 3. Product number which user wish to buy

// Output:
// 1. Return an object with properties of:
// => product: name of the product from the products array of obj
// => change: an array of change which vending machine returns to the user

// Things to note:
// 1. Change can only be given in: [500, 200, 100, 50, 20, 10]

// REMEMBER: Arrays are zero-indexed but the product number are given from 1, so in order to find the object at given product number, Subtract 1 from the product number in order to find the correct index or object inside products

// NOTE: IF THE MONEY(which user put in) === AMOUNT OF PRODUCT, then return an empty array

// Breakdown:
// 1. if productNumber < 1 || productNumber > 9
// => return "Enter a valid product number"
// 2. else if money < to the product amount
// => return "Not enough money for this product"
// 3. else
// ==> 1. First find out the change, if there is to return.
// =====> 1. Create an empty array called changeArr
// =====> 2. Find the price difference between the money which user gave and ther price of the product and update the "money" variable
// =====> 2. Create a function called "findChange" in order to find the change and pass arguments => changeArr, money
// =====> 3. Store the output from findChange function in a variable called returnChange
// ==> return {
// product: name property value of the products Array of obj,
// change: changeArr
// }

//  HOW TO FIND THE CHANGE
// 1. Create a function called "findChange" which will find the return change
// PARAMETERS: changeArr, money
//=> 1. Create a variable called "change" and store the change values in an array which machine can provide
// => 2. Check if money <= 0
// ===> return changeArr
// => 3. else
// ===> 1. Find a value which is lower than returnChange from change array and store it in a variable called "lowestChange"
// ===> 2. update the returnChange by subtracting lowestChange
// ===> 3. Push lowestChange into ChangeArr
// ===> 4. call findChange Function with parameters of update value of returnChange and changeArr

function vendingMachine(products, money, productNumber) {
  if (productNumber < 1 || productNumber > 9) {
    return "Enter a valid product number";
  } else if (money < products[productNumber - 1].price) {
    return "Not enough money for this product";
  } else {
    const changeArr = [];
    money = money - products[productNumber - 1].price;
    const returnChange = findChange(changeArr, money);
    return {
      product: products[productNumber - 1].name,
      change: returnChange,
    };
  }
}

function findChange(changeArr, money) {
  const change = [500, 200, 100, 50, 20, 10];
  if (money <= 0) {
    return changeArr;
  } else {
    const lowestChange = change.find((price) => money >= price);
    money = money - lowestChange;
    changeArr.push(lowestChange);
    findChange(changeArr, money);
  }
  return changeArr;
}

// Problem link: https://edabit.com/challenge/PYXbvQh9W3c9i72xx
