/** Excercise 22: Make your array-looping function from excercise 21 accept a callback function as the 2nd parameter
 *                And alter the function such that it runs the callback function with parameters on each iteration
 *                for example, if you called your function forEach, i should be able to run forEach(["a", "b"], console.log) and that should display 2 separate console logs with the texts "a" and "b"
 */
// Write your solution (code + comments + tests) below here:

let Arraylist = ['a', 'b', 'c']
function greeting (array, callback) {
  for (let index = 0; index < Arraylist.length; index++)
    //console.log(Arraylist[index] + 'at position:' + index)
    callback(array[index], index)
}

greeting(Arraylist, function (value, index) {
  console.log(value, index)
})
