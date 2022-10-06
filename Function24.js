/** Excercise 24: Array-methods: use .forEach
 *                Do the same thing you did in excercise 23, but instead of using your own function use the array.forEach method
 *                Try with different callback functions, inline anonymous functions, and arrow functions
 *                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */
// Write your solution (code + comments + tests) below here:

let Arraylist = ['hello', 'hi', 'welcome']
function greeting (array, callback) {
  for (let index = 0; index < Arraylist.length; index++)
    //console.log(Arraylist[index] + 'at position:' + index)
    callback(array[index], index)
}

greeting(Arraylist, function (value, index) {
  console.log(value, index)
})

Arraylist.forEach((value, index) => {
  log(value, index)
})
