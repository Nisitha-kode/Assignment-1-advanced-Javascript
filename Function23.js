/** Excercise 23: Call that same function with different functions as callback, including an inline-anonymous function
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
