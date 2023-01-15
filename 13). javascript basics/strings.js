//__________________concatination of string________________

//_____________________1).concate using + ______
// we can concate string using + operator in array using + we can add numbers but in string we can join words
let name = " dipali"
let greeting = "diwali"
console.log(name + greeting); // concatination

//___________________2). concat using concate method___

let variable;
variable = "this is heading " +
"<p> this is my para</p>";

variable =  variable.concat(' of str2','THIS IS');
console.log(variable);

//_________________ legth of string_____

console.log(variable.length);

//_____________________find value of index of string___________

console.log(variable[0]); // retrun index value of variable which is t
console.log(variable[17])  // p

//____________________find indexOf value_____________

console.log(variable.indexOf('this')); //  when you add whole word then it consider index 1
console.log(variable.indexOf('i'))  // when you add word one character then it is consider that words index like i is in 2nd index of "this"


//_________________when that value or word not exixt__

console.log(variable.indexOf('uhikjnmik')) // then return -1

//_____________when multiple occurance like i occure many times in string 

console.log(variable.indexOf('i')) // it return 1st chara occurance index of that value of  repeating character

//____________if you want last occurance of character index value of repeating character

console.log(variable.lastIndexOf('i')) // last index value of i is 25


//________________charAt use for slicing or finding index value_______________
console.log(variable.charAt(2)) //return i
console.log(variable.charAt(3)) // return s



/* ____________all below function can not chnge original string like array it is 
only return that string and original string is safe */

//______________ 2).return in lowercase()

console.log(variable.toLowerCase());

//__________________3).return in uppercase()

console.log(variable.toUpperCase());

// ____________all above function can not chnge original string like array it is 
//only return that string and original string is safe

console.log(variable); // this return original string

//_______________________________use of '' and ""____________-

let s ="dipali's cat " //or
let d = 'dipali"s cat'

//_________________________________ merge string with variable

let myName = "dipali"
let education = "B.E"

const temp1 = `${myName} it's "me" and ${education} this is my education` 
console.log(temp1);


//____________-_________escape sequence character for output in new line \n 

console.log("hello world \n dipali");

/* o/p is =hello world 
             dipali
*/
          

//_______________________________________________