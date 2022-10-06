/** Excercise 17: Complete the length() function below
 *                without using any array methods
 *                (no .length, .forEach or any other array-methods / attributes)
 */

/** Takes an array as parameter and returns its length, or 0 if array is empty or parameter is not an array */
/*
function length (array) {
  // Write your solution (code + comments + tests) below here:
  // PS: DO NOT USE array attributes or methods such as array.length / .forEach (make your own) :)

  // hint1: you may need an index counter, and you will need a loop (while, do while or for ?)
  // hint2: since you don't know the length, how will you make your loop stop looping ? (arrays return undefined when you give them an index that's larger than its size, so maybe check if array[index] == undefined ?)
  return
}*/
// tests
//const array = [1, 2, 3]
//const array5words = ['one', 'two', 'three', 'four', 'five']

//console.log(length(array3))
//console.log(length(array5))
//console.log(length())

//code
//Function length takes an array
function length (array) {
  let index = 0
  //check if the current offset has anything or undefined and increase the index
  while (array[index]) index++
  return index
}
console.log(length[(1, 2, 3)])
