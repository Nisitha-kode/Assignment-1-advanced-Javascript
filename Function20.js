/** Excercise 20: Template strings
 *                Upgrade the below console.log to use template strings
 */
/* 
console.log(
    "regions: " + regions.length + 
    "\ngirlNames: " + girlNames.length +
    "\nboyNames: " + boyNames.length +
    "\nlastNames: " + lastNames.length
)
*/
// Write your solution (code + comments + tests) below here:

import arrays from './lib.js'
const norwegianArrays = arrays()

//Destructuring of regions,lastnames and girlnames and boy names within other arrays

const [regions, [girlNames, boyNames], lastNames] = norwegianArrays
console.log(norwegianArrays)
//Template strings to  do formating
//Access variables inside template strings or backticks using ${}
console.log(`
regions:${regions.length}   
   girlNames:${girlNames.length} 
   boyNames:${boyNames.length} 
lastNames:${lastNames.length} 
    `)
