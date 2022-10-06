/** Excercise 10: Update the 2 anonymous functions you just created to accept parameter(s).
 * It's up to you what those parameters are (at minimum just accept a text and have them console.log that text)
 */
// Write your solution (code + comments + tests) below here:

//Crete a variable named user1 and set it to an anonymous function which accepts one parameter
const user1 = function (string) {
  console.log(string)
}
//Function call to anonymous function
user1('Anonymous Function call')

//Create another variable user2 and set it to an an arrow function with one parametr arg
const user2 = arg => {
  console.log(arg)
}
//Function call to anonymous function
user2('Anonymous Function call using arrow function')
