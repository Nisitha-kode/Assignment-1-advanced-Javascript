/** Excercise 7: Create a function that takes an object as parameter, i'd like to be able to call it with something like:
 *               yourFunction({message: "Hello", name: "Patryk"})
 *               You may call your object-properties something else than 'name' and 'message'.
 *               Have your function display the objects parameters (in my case thats name, message) in console.log
 */

function myobjectfunction (arg) {
  //Destructing
  let { string1, string2 } = arg
  //Console log display the object parameters wih both key and the value
  console.log(arg)
}
//Function call with object propertey(string1,string2) as parameters
myobjectfunction({ string1: 'Nisitha', string2: 'Prakash' })
