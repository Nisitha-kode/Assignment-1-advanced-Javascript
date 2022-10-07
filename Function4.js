/** Excercise 4: Make a copy of the function in excercise 3
 *               in the function definition (the line that says function nameOfYourFunction(param1, param2))
 *               change the way it receives parameters from (param1, param2) to use spread syntax...
 *               so it looks something like function nameOfYourFunction(...parameters) (where parameters is a word of your choice)
 *               Fix the function code so that it still works (hint: when we use the ...spread syntax inside parameter-definition it converts the parameters to an array, how do you access array elements ?)
 */

//function that receives parameters using spread syntax
function greeting (...args) {
  let [text1, text2] = args
  console.log(text1, text2)
}
greeting(null, 'say bye')
greeting('hi', 'bye')
greeting('hi', 'hello', 'welcome')
