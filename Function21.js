/** Excercise 21: Looping through arrays
 *                create a function that will take an array as parameter,
 *                and will console.log each element in the array one by one
 *                (use a for, for of, while, or do while loop, dont use array.forEach/array.map)
 */
// Write your solution (code + comments + tests) below here:

let Arraylist = ['hello', 'hi', 'welcome']
//Function named greeting takes an array as parameter
function greeting (array) {
  //For to loop through the arrays
  for (let index = 0; index < Arraylist.length; index++)
    //console log each element in the  array one by one
    console.log(Arraylist[index] + 'at position:' + index)
}
greeting(Arraylist)
