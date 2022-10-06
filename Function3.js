/** Excercise 3: create a function that takes 2 parameters, and let both parameters have defaults
 *               it should just console.log the parameters
 *               so that when we call this function, we should be able to call it with
 *               1) both parameters specified ie: myFunction("Say hi", "say bye")
 *               2) only one parameter specified ie: myFunction("Say hi") or myFunction(undefined, "Say hi")4
 *               3) or if no parameters are given, it should display the default parameter (instead of undefined)
 */

//function that takes 2 parameters with default values
function greeting (text1 = 'welcome', text2 = 'home') {
  console.log(text1, text2)
}

//1.Call the function greeting with both the parameters specified
greeting('hi', 'say bye')
//2.Call the function greeting with one parameters specified as Say hi
greeting('hi')
//.Call the function greeting with (undefined,Say hi)
greeting(undefined, 'say hi')
//3.Calling the function greeting with no parameters
greeting()
