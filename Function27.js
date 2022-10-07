/** Excercise 27: Fill your new array with random people (use your randomPerson function)
 *                Solve this first using array.forEach, and then using array.map methods
 *                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 *                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
// Write your solution (code + comments + tests) below here:

import arrays from './lib.js'
const norwegianArrays = arrays()

let team1 = new Array(6)
team1.fill(null)
team1.forEach((value, index) => {
  console.log(value, index)
})

team1[index] = randomPerson()
team1 = team1.map(value => randomPerson())
console.log(team1)
