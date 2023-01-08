Given:

- a square matrix is given
  - Meaning: all of the sub-arrays have an equal length

Return:

- Change the value of all the sub-arrays elements which are above the diagonal element of a parent array.

**Breakdown**

_Solve using For loop_

1. Create a For loop for Parent array
   - parameter: i = 0; i < parentArray.length; i++
     - Create another For loop inside the for loop of the parent array
       - Parameter: j = i+1; j < parentArray.length; j++
       - inside child For loop => get the elements above the diagonal elements and replace their values with 0
       - parentArray[i][j] = 0
2. When the conditions fails for For loop, then return the original array
