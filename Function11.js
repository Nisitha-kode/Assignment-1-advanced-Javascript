/** Excercise 11: Create a new function that accepts one parameter, and inside it have some code that will
 *                display that parameter on the webpage.
 *                Multiple ways you can do so (ie: innerHTML, innerText, textContent or using document.createElement())
 */
// Write your solution (code + comments + tests) below here:

//function that accepts one parameter
function greeting (arg) {
  //To display it on webpage using textcontent
  document.body.textContent = arg
}
greeting('Display it on the web page')
