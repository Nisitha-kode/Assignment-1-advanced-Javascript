//Code
/** Excercise 16: Array destructuring https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 *                the norwegianArrays holds multiple arrays in the following format:
 *
 *                norwegianArrays[0] = array of regions
 *                norwegianArrays[1] = array of arrays where:
 *                  norwegianArrays[1][0] = array of girlNames
 *                  norwegianArrays[1][0] = array of boyNames
 *                norwegianArrays[2] = array of lastNames
 *
 *                This is very difficult to navigate without making a mistake
 *                Can you destructure it to something more readable for example i'd like to access them like this:
 *
 *                regions = array of regions
 *                girlNames = array of girlNames
 *                boyNames = array of boyNames
 *                lastNames = array of lastNames
 *
 *                or something similar.
 *                (girlNames & boyNames can be a little tricky because they're inside of another array, see if you can figure it out, but it works fine if you do it on multiple lines as well)
 */
// Write your solution (code + comments + tests) below here:
//code

import arrays from './lib.js'
const norwegianArrays = arrays()
const [regions, [girlNames, boyNames], lastNames] = norwegianArrays
/*//Function named randomPerson
function randomPerson () {
  //Generate randomperson and return it as an object
  return {
    first: randomElement(girlNames),
    last: randomElement(lastNames),
    region: randomElement(regions)
  }
}
console.log(randomPerson())
console.log(randomPerson())
*/
/** Excercise 18: Create a function that returns a random element from an array
 *                For example: randomElement(array5words) should return a random one of these: "one", "two", "three", "four", "five"
 */

// Write your solution (code + comments + tests) below here:

let array = ['one', 'two', 'three', 'four', 'five']
//Function named randomElement which takes array as a parameter
function randomElement (array) {
  //Return the array
  return array[Math.floor(Math.random() * array.length)]
}
console.log(randomElement(array))

/** Excercise 27: Fill your new array with random people (use your randomPerson function)
 *                Solve this first using array.forEach, and then using array.map methods
 *                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 *                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
// Write your solution (code + comments + tests) below here:

//code

//Create a new array named team1 and set it length to 6
//Using array.forEach
let team1 = new Array(6)
//Fill the array with null
//team1.fill(null)
team1.forEach((value, index) => {
  //  Set the group[index] to a random person
  group1[index] = randomPerson()
})
console.log(team1)

// Using array.map
//Use .map which loops through an array but also returns a new array
team1 = team1.map(value => {
  return randomPerson()
})
