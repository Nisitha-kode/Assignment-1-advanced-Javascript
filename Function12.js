/** Excercise 12: Create a new function takes some text as one parameter, and
 *                another function as another parameter (this is also known as a callback function)
 */
// Write your solution (code + comments + tests) below here:

//Function named greeting  takes text as one parameter and another function named callback as another parameter
function greeting (text) {
  console.log(text)
}
function welcome (msg = 'No msg', callBack) {
  callBack(msg)
}

greeting('HI hello')
//welcome('Hello welcome home', 'greeting') // TypeError: callBack is not a function
welcome('forward this msg for me pls', greeting)
