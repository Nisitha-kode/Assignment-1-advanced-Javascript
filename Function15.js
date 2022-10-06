/** Excercise 15: Below we have an array stored in the longArray variable
 *                can you think of a way we can access it before its declared ?
 */

// Write your solution (code + comments + tests) below here:

// hint1: maybe you can have a pointer 'function' of some sort ?

// console.log(longArray) // i want to run this code here, before the array data is declared

/* let longArray = ["___a____", "___very____", "___long____", 
 "__array_____", "___of____", 
 "____things___", "___and____", 
 "____data___"]
*/
// hint2: variables need to be declared before they can be accessed
// hint3: normal functions are automatically hoised to the top of the script, so they can be called before they're declared
// hint4: functions can return arrays*/

//CODE
//Declare a variable named longArray and set it to a function named data()
const longArray = data()
console.log(longArray)
//Create a function named data
function data () {
  //Return the array
  return [
    '___a____',
    '___very____',
    '___long____',
    '__array_____',
    '___of____',
    '____things___',
    '___and____',
    '____data___'
  ]
}
