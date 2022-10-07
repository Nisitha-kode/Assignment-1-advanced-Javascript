/** Excercise 5: Use array destructuring on the parameters in your function from excercise 4
 *               So that instead of saying for example: console.log(parameters[0]) you can just say console.log(text1)
 */
//function that takes 2 parameters with default values
function greeting (...args) {
  //Destructure the parameters using array
  let [text1, text2] = args
  console.log(text1, text2)
}
//Function call with parameters
greeting(null, 'say bye')
greeting('hi', 'bye')
