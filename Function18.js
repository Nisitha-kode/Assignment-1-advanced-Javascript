/** Excercise 18: Create a function that returns a random element from an array
 *                For example: randomElement(array5words) should return a random one of these: "one", "two", "three", "four", "five"
 */

// Write your solution (code + comments + tests) below here:

//Code
import arrays from './lib.js'
const norwegianArrays = arrays()
const [regions, [girlNames, boyNames], lastNames] = norwegianArrays
//Function named randomPerson
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

let array = ['one', 'two', 'three', 'four', 'five']
//Function named randomElement which takes array as a parameter
function randomElement (array) {
  //Return the array
  return array[Math.floor(Math.random() * array.length)]
}
console.log(randomElement(array))
