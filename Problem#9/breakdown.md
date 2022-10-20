**_Given_** - Array of numbers - a number

Notes:

- Count how many times, items in array are greater or equal to the given number
- After counting, find out the percentage
- Return percentage, with one decimal place.

**Formula to find percentage**

- Precent probability of event = 100 \* (num of favourable outcomes) / (total num of possible outcomes)

**Breakdown**

1. use Reduce method to check if the current value is greater than the number
   - If it is then add 1 to the Accumulator
   - IF it is not then add 0 to the accumulator
2. Percent Probabilitiy = (100 \* (outcome from reduce))/given array's length
3. after getting the probability, prob.tofixed(1) to get the value till one decimal value
   - toFixed: it will add a value, even if the outcome was an integer value
   - make sure to convert the outcome from toFixed to a number, because it will return a string
