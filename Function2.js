//Excercise 2: modify the above function (or make a new function) such that it will have a default parameter.
/* Set that default parameter to "No text given"
 *               So if you named your function: myFunction()
 *               if i run myFunction() it should then display "No text given" in the console
 *               but if i run: myFunction("Show this text") it should instead log to console: "Show this text"
 */

//Function with  default parametr as "No Text given"
function myfunction (param1 = 'No Text given') {
  console.log(param1)
}
//Function call without the parameter
myfunction()
//Function call with the parameter
myfunction('Show this text')
