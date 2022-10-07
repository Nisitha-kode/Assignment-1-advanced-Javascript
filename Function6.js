/** Excercise 6: Add default parameters to your function in Excercise 5, so that it works without errors (or without console log showing undefined)
 *               even when one or many or all parameters arent specified.
 */

//function that takes 2 parameters with default values
function greeting (...args) {
  let text1 = 'hi',
    text2 = 'hello'
  console.log(text1, text2)
}
//Function with prameters 1 is set as null
greeting(null, 'say bye')
//Function with prameters 2 is set as undefined
greeting('bye', 'undefined')
//Function with prameters 1 is not specified
greeting('hello')
//Function with both the parameters are not specified
greeting()
