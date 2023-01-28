function getTotalPrice(groceries) {
  const totalPrice = groceries.reduce((a, c) => a + c.quantity * c.price, 0);
  return +Number.parseFloat(totalPrice).toFixed(1);
}

// Problem link: https://edabit.com/challenge/jRSST87NjECBzbwzL
