/** Excercise 13: Call the function in excercise 12 with some text and another function you created earlier (for example a function that console.logs something).
 */

// Write your solution (code + comments + tests) below here:

function calling (text, callback) {
  //callback function with text as an parameter
  callback(text)
}
calling('This is the callback function', greeting())
