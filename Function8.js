/** Excercise 8: Add default parameters to your function parameters, so that it will work if either all, some or no parameters are given (without errors, or display of undefined)
 *               (Don't forget to also set a default for the entire object itself too, or you will get an error if the function is called without any parameters)
 */
// Write your solution (code + comments + tests) below here:

//function that takes 2 parameters with default values
//setting the entire object to default value as empty
function myobjectfunction (arg = {}) {
  //Set default values to the parameters
  let { string1 = 'Hi', string2 = 'welcome' } = arg
  //Console log display the object parameters wih both key and the value
  console.log(string1, string2)
}
//Function call with object propertey(string1,string2) as parameters
myobjectfunction({ string1: 'Nisitha', string2: 'Prakash' })
//Function call with object propertey string 2 alone given
myobjectfunction({ string2: 'Prakash' })
//Function call with object propertey string 1 alone given
myobjectfunction({ string1: 'Nisitha' })
//Function call with  no object properties are  given
myobjectfunction({})
