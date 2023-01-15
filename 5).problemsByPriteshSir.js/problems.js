
//_______________________reverse string using slice 

/* use for string as well as array
let arr = [P,Q,R]
slice (start , end) => (3, end) //skip character from start index 0 to insex 3 and print after that 
                                ex=[hello]=> skip 0 to 3 output is [lo]

(-slice) (-3,end) // skip chara from end and print character from start 
                 ex=> [hello] => output is [hel] => print 0 to 3 and skip after that

*/

// write a prog to reverse a string (using splice)
// ex = "hello" = "olleh"
// reverse ("hello")+h
//reverse ("llo")+e+h
//reverse ("lo")+l+e+h
//reverse ("o")O+l+e+h
//o+l+l+e+h


// solution =>

// let str = "hi there"


// function reverseWord (str){
//     if(str.length === 0) return " "  // base case
//     return reverseWord (str.slice(1)) + str[0]  // use slice for reverse from index 1 str[0] = "i",str[1]= "am"
    
// }

// function reverseSen(str){  //   for sentence
//     let arr = str.split(" ") // convert in array
//     for(let i=0;i<arr.length;i++ ){ //reverse
//         arr[i]=reverseWord(arr[i]) // use recursion here but indirect recursion bcs we call upper function here
//     }
//     return arr.join(" ") // remove array
// }

// console.log(reverseSen(str)); // call function

    
    

//________________________________________________palindrome (recursion)_______________________


let a = "abba"
function isPlr(a){
    if(a.length<=1) return true
    if(a[0]==a.slice(-1)) {
     return isPlr(a.slice(1,-1))  // compare 1st and last digit
    }
else {
    return false
}
}
console.log(isPlr(a))



//_______________________________________________flatten an array__________________________________



// flatten array = [1,2,[3,4,5],[6,7]] called flatten array means array in array


// [1] concat with flatten array [2,[3,4,5],[6,7]]
// [1,2] concate with flatten array [3,4,5] concate with flatten array[[6,7]]
// [1,2,3,4,5] concate with flatten array [6,7]
// ans = [1,2,3,4,5,6,7]


// string=["a","b",["c",[[["d"]]]]] // flatten string
// ans =["a","b","c","d"]


// function flattenArray(arr){
//     let flat = []
//     for(var i =0;i<arr.length;i++){
//         if(Array.isArray(arr[i])== false) flat.push(arr[i])
//         else flat=flat.concat(flattenArray (arr[i]))  // when do concat then there is need to reassign it for modify origional array
//     }         return flat                                // bcz hame value to mil jati hai but origional array chnge nhi hota


// } console.log(flattenArray(["a","b",["c",[[["d","e"]]]]]));



//__________________________________________capitalize the first letter of all string_________

// let arr= ["abc","pqr","xyz","jkl"]

// function capitalise(arr){
// let result = []   // use for push jo nikala hua string hai uske liye
// if (arr.length == 0) return []

// let s = arr[0].toUpperCase()+arr[0].slice(1)
// result.push(s)
// return result.concat(capitalise(arr.slice(1)))
// }
// console.log(capitalise(arr));


//___________2).capitalize the first letter of all string





//______________________________________ power function ______________________________


//_____________solution


// let num1=2       //it is a number
// let num2=4     // it is a power 
// function power(num1,num2){
//    if(num2==0){
//        return 1
//    }
//     else{
//         return num1*power(num1,num2-1)
//     }
// } console.log(power(num1,num2))










//_____________________________________________________________________________________
//take a number and if number is multiple of 3 print "foo".
//if number is multiple of 5 print "bar".
//if not a multiple of either,print nothing.
//if multiple of both 3 and 5 then print fooBar
//6 =>foo  // 30 =>foobar
//10 =>bar  

//=> solution 



// //if number is multiple of 3 print "foo".
// function printNum(num){

//     if(num%3 === 0){
//         console.log("foo");
//     //if number is multiple of 5 print "Bar".
//     } 
//     else if(num %5 ===0 && num%7 !==0){
//         console.log("Bar");
//     } //if number is multiple of 5 and 7 then num%5 =0 and num%7=0
//     else if(num %5 ===0 && num%7 ===0){
//         console.log("FooBar");
//     } else {
//         console.log("nothing");
//     }
// } printNum(15)
//  printNum(20)
//  printNum(3)
//  printNum(35)
//  printNum(16) // we add value in function call



//______________________________swap two numbers without using third variable _____________________

// let a=10
// let  b=5
// function swapNum (a,b){

//     a=a+b //15
//     b=a-b // 15-5 a=10
//     a= a-b // 10-5 //b=5
 
//     console.log(a,b);
 
// } swapNum(a,b)

//_____________________________swap two string without using 3rd variable_________________________________

// let x= "good"
// let y= "morning"

// function swapString(x,y){

//     x=x+y
//     y = x.slice(0,y.length)
//     x= x.slice(y.length)
//     return x+" "+y
// }
// swapString(x,y)

//_____________________REVERSE array without using extra array(swapping)___________
              

// //____________________-solution(multipointer and swapping)

// let arr = [12,4,67,2,34]   // => [34,2,67,4,12]
// function reversearr (arr){
// let i =0
// let j = arr.length-1

// while(i<j){

// // swap (arr[i], arr[j])
// arr[i] = arr[i] + arr[j]
// arr[j] = arr[i] - arr[j]
// arr[i] = arr[i] - arr[i]
//  i++;
//  j--

// } return arr


// } console.log(reversearr (arr))


//______________________multidimensional array (matrix) problem(leetcode)______________

// find richest custmoer of bank
//i/p = [[2,8,7],[7,1,3],[1,9,5]]       2D array
//o/p = 17

//(matrix)
// m= rows = customers  
// n = column= bank
// max sum of all bank is  richest customers

//   row
//                   bank1     bank2     bank3
/*    customer1       2,         8,        7       column            sum = 17
      customer2       7,         1,        3                         sum = 11
      customer3       1,         9,        5                         sum =15 */      
 
//here money of customer1 is in all 3 banks so do sum of all 3 bank money  ,customer2,customer3 also and find which sum is highest amount and that one is richest person



// solution =>  

// T.c and S.c  of matrix = o(m*n)


// function calculatetotalSum(banks){   // doing sum of all bank
//     let totalAmount =0
    
//     for(let balence of banks){
//         totalAmount+=balence
        
//     } return totalAmount
    
// } 

// function calculateRichestPerson(accounts){
//     let maxAmount = -Infinity
//     for(let customer of accounts){                                    // find maxSumOfAmount
//         maxAmount = Math.max(calculatetotalSum(customer),(maxAmount))
//     }
//     return maxAmount
    
// } console.log(calculateRichestPerson([[2,8,7],[7,1,3],[1,9,5]]));



//__________________________________count Animals(hashmap)___________________
//count repeated animals

// function animalCount(animals){
// let map = {}

// for(let i of animals){
// if(map[i]){
//     map[i]+=1;
// }else{
//     map[i] = 1
// }
// }console.log(map);

// } animalCount(["cat","dog","horse","lion","cat","dog","horse","lion","cat","dog","horse","lion","cat","dog","horse","lion","dog","horse","dog","horse"])



//___________________________________convert numbers into arrays string (abcd...)___________________________________

// jitake numbers aahe titake character aanayche like 2 asel tar ab , 4 asel tr abcd , 26 asel tr [a......z]

// function generateString (numbers){
//     let alphabet = "abcdefghijklmnopqrstuvwxyz";
//     let finalStr =""
//     let currIndex =0

// while(currIndex<numbers){
//     // finalStr+=alphabet[currIndex] 
//     finalStr+=alphabet[currIndex%26]    // use modular if nub is more than 26..bcz of modular nub again start print from a 
//     currIndex++                         // bcz 26%26 = 0 so it will start from start a
// }
// return finalStr
// } 

// // function encodedNumWithCharacter(arr){  //use for print string seperately as per number using generateStringFunction 
// //     for(let i=0;i<arr.length;i++){
// //         arr[i]=generateString(arr[i])
// // }
// // }

// function encodedNumWithCharacterOptimaly(arr){   // this solution with optimal for reduce t.c

//     let maxNumber = Math.max(...arr);    // max value generate krke hum usko save kr rhe hai 
//     let encodedArray= [''];
//     for(let i=1;i<=maxNumber;i++){  //start 0 nhi hoga bcz 0 pe kuch nhi hai// fir value agar max num se kam hogi to vo yahi se print hogi bcz vo allredy generate ho chuki hai to T.C kam lageli o(1)
//         encodedArray.push(generateString(i));
//     }

//     for(let i=0;i<arr.length;i++){
//                 arr[i]=encodedArray[arr[i]]
//          }
// } 
// const temp = [2,5,3,4,5,6]
// encodedNumWithCharacterOptimaly(temp)
// console.log(temp);
// console.log(generateString (30));   // if value is greterthan 26 for handle this case use modular


