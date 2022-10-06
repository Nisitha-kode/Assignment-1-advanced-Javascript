/** Excercise 14: Call the function in excercise 12 with some text as parameter again, but
 *                as the 2nd parameter use an anonymous function,
 *                and write some logic in the scope of this inline-anonymous function
 *                (it doesn't have to be complicated, just some random console log or something)
 */

// Write your solution (code + comments + tests) below here:

function calling (text, callback) {
  //callback function with text as an parameter
  callback(text)
}
//Function call with 2nd parameter as anoymous function
calling('This is the callback function', function () {
  console.log('welcome')
})
