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
//Destructuring of  regions,last names and girlNames and boyNames which are inside an another array
const [regions, [girlNames, boyNames], lastNames] = norwegianArrays
//console.log(norwegianArrays)
console.log(regions)
console.log(girlNames)
console.log(boyNames)
console.log(lastNames)
