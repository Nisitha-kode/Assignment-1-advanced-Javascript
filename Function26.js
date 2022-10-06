/** Excercise 26: Loop through your new array, and console.log each element on each iteration
 *                If you see nothing in the console, make sure to fill the array with some data first https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
 */
// Write your solution (code + comments + tests) below here:

import arrays from './lib.js'
//Create a newArray and declare it to group1
let group1 = new Array(8)
//LOop through newarray using foEach
group1.forEach((value, index) => {
  group1[index] = randomPerson()
})
//console.log(group1)
//console.log(group1[0])
console.log(randomPerson())
