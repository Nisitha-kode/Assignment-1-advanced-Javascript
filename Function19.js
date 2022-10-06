/** Excercise 19: In excercise 16 you destructured the norwegianArrays arrays into shorthands like: regions, girlNames, boyNames, lastNames
 *                Create a function called randomPerson that will generate a random person and return it as an object
 *                it should return something like this:
 *                {
 *                  first: "A random firstName",
 *                  last: "A random lastName",
 *                  region: "A random region"
 *                }
 *
 *                For now ignore the fact that there are different arrays for boyNames and girlNames, just make it choose a random name from one of these.
 *                Reuse the randomElement function you created in excercise 18
 */

// Write your solution (code + comments + tests) below here:

////code
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
