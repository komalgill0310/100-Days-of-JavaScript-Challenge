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

// NOTE: IF THE MONEY(which user put in) === AMOUNT OF PRODUCT, then return an empty array

// Breakdown:
// 1. if productNumber < 1 || productNumber > 9
// => return "Enter a valid product number"
// 2. if money < to the product amount
// => return "Not enough money for this product"
// 3. else
// ==> 1. First find out the change, if there is to return.
// =====> Create an empty array called changeArr
// =====> Create a variable called returnChange = amount(which buyer gave) - price(for the product)
// ====> Check if priceChange === 0
// ====> change: []
// ====> else
// ======> Find out the values from the change whose addition is equal to returnChange and then push them into changeArr
// ======> return {
// product: name property value of the products Array of obj,
// change: changeArr
// }

// Problem link: https://edabit.com/challenge/PYXbvQh9W3c9i72xx

//  HOW TO FIND THE CHANGE
// 1. Store the change which the machine can provide in an array called "change"
// 2. Create an empty array and store it in a variable called "changeArr"
// 3. find out the return change by doing subtraction between the money which user gave - the price for the item itself and store it in a variable called "returnChange"
// 4. Check if returnChange === 0
// ====> return changeArr
// else
// =====> if(changeArr.includes(returnChange))
// changeArr.push(returnChange)
// =====> else
// findMoney(returnChange)
//

// YET TO FIGURE OUT
