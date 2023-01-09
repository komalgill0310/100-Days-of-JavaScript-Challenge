Given:

- Two arrays are given
  - One array is for the attacker
  - second array is for the defender
- Both arrays contains the integer for the army's values.

Rules to solve the problem:

- Compare each value of the array

  - NOTE: Make sure the comparison is done from the highest to lowest.

- Rules to play the game:
  - If the value of attcker is greater than the value of defender, than defender loses an army.
  - If attacker's value === defender's value, attacker loses an army.
  - If defender's value > attacker's value, then defender wins the fight.

NOTE:

- Whoever loses a fight, will only lose one army per comparison.

Return:

- How many armies has been lost by the defender in a battle.

Breakdown:

1. First sort both arrays from highest to lowest.
2. Store their values in a const variable.

- const sortAttackerArr = att.sort((a,b) => b - a)
- const sortDefenderArr = att.sort((a,b) => b - a)

3. Also create a variable which will get incremented by one each time, when defender loses an army.

- let armyLostByDefender = 0

4. Run a for loop on the sortAttackerArr

- Parameters for For loop will be:
  - i = 0; i < sortAttackerArr.length; i++
    - Inside for loop, check for a condition:
      - if(sortAttackerArr[i] > sortDefenderArr[i])
        - armyLostByDefender++

5. Once the For loop has finished, return the variable called **armyLostByDefender**
