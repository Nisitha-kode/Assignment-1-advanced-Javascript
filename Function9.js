/** Excercise 9: Create 2 variables, 
 *               set one of the to an anonymous function() using the function syntax (with just a console.log() inside the function scope)
 *               and set the other one to an arrow function (and similarly add some console.log inside the functions scope)
 *               Test both functions
/* 
// Write your solution (code + comments + tests) below here:
*/
//Crete a variable named user1 and set it to an anonymous function
const user1 = function () {
  console.log('Anonymous Function call')
}
//Function call to anonymous function
user1()

//Create another variable user2 and set it to an an arrow function
const user2 = () => {
  console.log('Anonymous Function call using arrow function')
}
//Function call to anonymous function
user2()
