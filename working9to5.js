// Input: Given an array with four values:
// 1. When user started working
// 2. When user finished working for the day
// 3. Hourly rate
// 4. Overtime multiplier

// NOTE: The first two parameters are given in 24H format.

// Output:
// 1. Based on the hours user worked, calculate the total amount they earned that day. Return the output in a format: `$(calculatedAmount)`
// 2. Output should be upto two decimal places.

// Breakdown:
// 1. Create a variable called "regularWorkingHour" and assign 0 to it.
// 2. Create a variable called "earned" and assign 0 to it.
// First part: if start working hour & end working hour is below 18 and Start working hour Greater than 8
// ===> 1. Subtract end working hour - start working hour and store it in a variable called "regularWorkingHour"
// ===> 2. Multiply "regularWorkingHour" with the hourly rate and store it in a variable called "earned"

// Second Part: if startWorking Hour > 17 && endWorkingHour >17
// ===> 1. regularWorkingHour = endWorkingHour - startWorkignHour
// ===> 2. earned = hoursWorked * hourlyRate * overtimeMultiplier

// Third Part: if (startWorkingHour > 8 and startWorkingHour < 18) && (endWorkingHour > 16 and endWorkingHour < 24)
// ===> 1. subtract endWorkingHour - 17 and store it in a variable called "workedOvertime"
// Why => Because overtime starts from 5pm OR 17
// ===> 2. subtract 17 - startWorkingHour and store it in a variable called "regularWorkingHour"
// Why subtract from 17 => Because regular working hour finishes at 17
// ===> 3. Add regularHoursWorked + (workedOvertime * overtimeMultiplier) and store it in a variable called "totalHoursWorked"
// ===> 4. Calculate earned hour by multiplying totalHoursWorked * hourlyRate

// 3. Return the earned hour in a format like this: `${earned.toFixed(2)}

// Problem link: https://edabit.com/challenge/kYwxQo9tqLpFYTMY6

function overTime(arr) {
  const startWorkingHour = arr[0];
  const endWorkingHour = arr[1];
  const hourlyRate = arr[2];
  const overtimeMultiplier = arr[3];
  let regularHoursWorked,
    earned = 0;
  if (startWorkingHour < 8 || endWorkingHour > 24) {
    console.log("Please enter the correct working time.");
  }
  if (startWorkingHour > 8 && startWorkingHour < 18 && endWorkingHour < 18) {
    regularHoursWorked = endWorkingHour - startWorkingHour;
    earned = regularHoursWorked * hourlyRate;
  }
  if (startWorkingHour > 17 && endWorkingHour > 17) {
    regularHoursWorked = endWorkingHour - startWorkingHour;
    earned = regularHoursWorked * hourlyRate * overtimeMultiplier;
  }
  if (startWorkingHour < 17 && endWorkingHour > 16) {
    regularHoursWorked = 17 - startWorkingHour;
    const workedOvertime = endWorkingHour - 17;
    const totalHoursWorked =
      regularHoursWorked + workedOvertime * overtimeMultiplier;
    earned = totalHoursWorked * hourlyRate;
  }
  return `${earned.toFixed(2)}`;
}
