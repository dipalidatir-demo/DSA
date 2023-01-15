
//________________________________________________print n to 1_____________________________

// function printByRec(n){  //arr.length = 6
//     if(n==0){ //base condition
//         return
//     }
//     console.log(n);
//     n--
//     printByRec(n)
// } printByRec(6)

//____________________________________________________________Factorial of a number______________


// Given a positive integer, find factorial of it.
// Input:5, Output: 120
// For N = 5, factorial of 5 (5!) = 5 * 4 * 3 * 2 * 1 = 120
// Assume that, Value of N can be in the range from [0 to 20] */

// solution
//_________________by iteration

// let a = 5;
// function factorial (a){
//     let fact = 1
//     for(let i=1;i<=a;i++){
//  fact= fact*i;

//     }
//     return fact;
// } factorial(a)


//____________2nd by iteration

// function fact (n){
//     let res =1
//     for(i=n;i>0;i--){
    
//    res = res*i
    
//     } console.log(res);
//     } fact (4)
    
    
    
    //___________recursion approach


    // let a = 5  // 5*4*3*2*1
    // function factorial (a){
    //    if (a == 0) return 1 // base condition at the last
    //    if(a>0){ 
    //     return a*factorial(a-1)
    //    }
    // }
    // console.log(factorial(a));


    //_________________________________________________________________factorial____________________________


// let arr = [1,2,3,4,5,6]

// function factorialNub (n){
//     if(n > 6){
//         return
//     }
//     console.log(n);
//     factorialNub((n-1)* n )
// }  factorialNub (0)



//_________________________________________________________________find sum (recursion)__________________________

    /*Find sum of array elements using recursion
Given an array, find the sum of array elements using recursion. 
Write a function that accepts an array A and size of an array N. The function should return the sum of the array elements. 
Input =    1 2 3 4 5   */

// let sum = [ 1,2,3,4,5]

// function PrintSum (i,n,sum){
//     if(i == n){
//         sum +=i
//     } return sum
// }console.log(PrintSum (1,5,0));



//_____________________________________________________________________find sum (R) __________________________

/*Find sum of N numbers using recursion
Given an integer N, calculate the sum of 1 to N integers using recursion.
Write a function:
    def solution(N):
that accepts an integer N, the function should return the sum of 1 to N integers.
Input 5
Output15
here N=5 then sum= 1+2+3+4+5=15.
    Assume that, N is an integer within the range [1 to 10000]. */

//solution

// let n =5 //1+2+3+4+5
// let sum =0
// function sumOf (n){
//     // let sum2;
//     if(n===1) { // 5==1 =>1
//         return 1 }
//     if (n>1) { //5>1 
//         return n+sumOf(n-1)} //5+ sumof(5-1) //4
        
//     // } return sum

//     }console.log(sumOf(n))

// ______________________________________________________________reverse array (R)_____________________

// let arr = [1,2,3,4,5,6]

// function reverseRev (n) {

//     if(n < 0){  // 6 < 0  when 0 is greater than n then base case become true
//           return
//     }
//        console.log(arr[n])
//        n--    // reverse
//  reverseRev(n)


// }reverseRev(5)  // reverse


//______________________________________________________reverse word (R)________________________________________

// let str = ("i am nikita") // for word

// function reverseWord (str){
//     if(str.length === 0) return " "  // base case
//     return reverseWord (str.slice(1)) + str[0]  // use slice for reverse from index 1 str[0] = "i",str[1]= "am"
    
// }

// function reverseSen(str){  //   for sentence
//     let arr = str.split(" ") // convert in array
//     for(let i=0;i<arr.length;i++ ){ //reverse
//         arr[i]=reverseWord(arr[i]) // again use recursion here but indirect recursion bcs we call upper function here
//     }
//     return arr.join(" ") // remove array
// }

// console.log(reverseSen(str)); // call function


//______________________________________________________duplicate key (without R)________________________________

// arr =[23,3,2,1,3,1]

// function duplicates (arr) {
//     let freuencies = new map()
//     for (let i=0 ; i<arr.length ; i++){
//         if (map.get ( arr[i] ) == undefined) map.set(arr[i] , 1)
//     }
// } console.log(duplicates (arr));

//___________________________________________________ Reverse a number  OUTPUT IN STRING using (R)_______________________

// Given a number N as input, write a program to reverse N using recursion.
// Write a function that accepts an integer N. The function should return reverse of N using recursion. 
// Input:   10348
// where:First line represents a value of N.
 //Output: 84301
// solution =>

//    let num = "10348"

//    function revNum (num){
//     let newNum =0

//     for (i=num.length-1;i>=0;i--){
//         if(newNum == num ){
//             console.log(newNum);
//             return newNum
//         }

//     }return newNum
//    }  revNum(num)


// _____________________________________________REVERSE A NUM OUTPUT IN NUM (R)__________________

// let num = 122222221
// function isPalindrome(num){
//     let rev =0
//     let num2=num
//     while(num>0){
//         let rem = num%10   // 121%10=1 , 12%10=2
//         rev=rev*10+rem   //0*10+1 =1   , 1*10+2=12                 //121
//         num = Math.floor(num/10) //121/10 = 12.5 , 12/10 =1.5 =1
//     } if (num2==rev){
//         return "this is palindrome"
//     }else{
//         return " this is not palindrome"
//     }
// } console.log(isPalindrome(num));


//____________________________________PALINDROME IN STRING (NOT PERFECT)____________________

// // by pritesh sir
// //REFER = return [R=R && is plr ("EFE")
// return [ R==R && E==E  && is Plr("F")]
// function isplr (tsr){
//     is(str.length <=1) {
//         return true 
//     return (str(0) == str.slice(-1)&& isplr(str.slice (1,-1))))}
// }

// function isprl2(str){
//     if
// }

//_______________________________________________________________fibonacci number _________________________________

// function fib (n){
// let a=0
// let c=0
// 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987

// function fib (n){

//     if(n==0) return 0 //  ye condition li hai bcz hame starting me 0 // (0==0) = 0
//     if(n<=2) return 1   // ye hamne liya bcz hame 1 chahiye two times starting me // (0<=2) = 1 , (1<=2) =1 
//     return fib(n-1)+fib(n-2) // 0+1=1 , 1+1 =2 , 1+2=3 , 3+2=5 , 5+3=8 , 8+5 =13, 13+8= 21, 21+13=34 , 34+21 =55
    
    
//     }
//     console.log(fib(11));


//_________________________________________________________________odd number of continuous nub (R) _________________________

/*Given two integers N1 and N2, find the odd numbers between N1 to N2 using recursion. 
Write a function that accepts integers N1 and N2. The function should display odd numbers from N1 to N2 using recursion. 
Input: 16 
       25
where:
First line represents a value of N1
Second line represents number N2
 Output: 17 19 21 23 25 */

//  function oddNum (a , b){
//     //let arr = []                    //additional
//     if(a<=b){
//         if(a%2 !=0){
//            // arr.push(a)                    //additional
//            // console.log(arr.join(""));     //additional
//            console.log( a );
//         } return oddNum (a+1 ,b)
//     }return " "

//  } console.log(oddNum (16,25));

 
//__________________________________________________________________recursion (divisible by 7)_______________________________


//_______solution by iteration =>

// let arr = [14,23,67,70,77,101,7,42,45]

// function divisibility(arr){
// for(let i=0 ; i<arr.length;i++){
// if(arr[i] % 7 == 0) console.log("yes");
// else console.log("no");
// }
// } divisibility(arr)



//__________solution by recursion =>

// let arr = [14,23,67,70,77,101,7,42,45]
// function divisibility(arr){
// if(arr.length == 0) return  // return blank  // base case
//   let ele = arr.pop()
//     if (ele % 7 ==0)  console.log("yes") 
//     else  console.log("no") 

//     divisibility(arr)
 
// }divisibility(arr)

//______________________________________________________write a function to countdown from n to 1____________________
// n,n-1,n-2,n-3.....2,1

//________solution by iteration =>

// function countdown(n){
//     for(let i=n ; i>0; i--){
// console.log(i);
//  }
// //  while(j>0){
// //     console.log(i);
// //     i--
// //  }
// }countdown(10)

// ____using recursion__________


//solution =>

// function countdown(n){
// if(n==0) return 
// else console.log(n);
// n--
// countdown(n)
// } countdown(6)

//_______________________________________ return the sum of n to 1 (5 to 1)___________________

//_________using recursion 1st way

// function sumOf(n){
//     let sum = 0
//     if(n==1) {
//         return 1
//     }
//     else{
//         return n + sumOf(n-1)
//     }
// } console.log(sumOf(5));

//__________useful way in one line

// function sumOf(n){
//     if (n==1) return 1
//     else return (n+sumOf(n-1))  // (5+(4)) 
// } console.log(sumOf(10));



//_________________________________________________________call stack_______________________

// function pqr(){
//     console.log("thanks");
//     return
// }
// function abc(){
//     pqr()
//     console.log("finally");
// }
//  // output => "thanks" , "finally"


//________________________________________________________________________________factorial_______________________


//____________by iteration

// function fact (n){
// let result = 1
// for(i=n;i>0;i--){
//     result = result*i
// }
// return result
// } console.log(fact (6));

//______by recursion

// function fact (n){
// if(n==1) return 1
// return n*fact (n-1)

// } console.log(fact(6))

//______________________________________________________fibonacci num______________________________

//fibo(5) =  fibo(4)+fibo(3)
//fibo(n) = fibo(n-1) + fibo(n-2)


//___________1st way

// function fibo(n){
// if(n<=4) return 1
// return fibo (n-1)+fibo(n-2)
// } console.log(fibo([3,5,2,8]));

//_________2nd way

// let arr = [3,5,2,8]

// function product(arr){
//     if(arr.length ==0) return 1
//     return arr[0]*product(arr.splice(1))  // you can also use pop and slice here
// } console.log( product(arr));



//__________________________________________________power function____________


  //n is even =x ^ n = x ^ (2 * (n / 2)) = (x ^ 2) ^ (n / 2)
 // n is odd =x ^ n = x ^ ( 2 * (n - 1) / 2 + 1 ) = (x ^ 2) ^ ((n - 1) / 2 * x


//_____________solution (but not pases all test cases)

// let nub =2 //it is a number = 2^4
// let pow = 4 // it is a power 
// function powerfunction (nub,pow){
//     if(pow === 0){
//         return 1
//     }
//     return nub*powerfunction(nub,pow-1)
// }console.log(powerfunction (nub,pow));



//_____________passes all test cases

// let n =2
// let x = 4
// function mypow (n,x){
// if(n==0){
//     return 1
// } if(n>0){
//     n = -n
//     x = 1/x
// }

// return (n%2 == 0) ? mypow(x*x,Math.floor(n/2)) : x*myPow(x*x,Math.floor(n/2))

// } console.log((n,x));

  
// var myPow = function(x, n) {
//     if (n == 0) return 1;
//     if (n<0) {
//             n=-n;
//             x=1/x;
//     }
// // n is even : x^n = (x^2)^(n/2);  // n is odd : x^n = (x^2)^((n-1)/2) * x;
//     return (n%2 == 0) ? myPow(x*x, Math.floor(n/2)) : x*myPow(x*x, Math.floor(n/2)); 
// };



//__________________find num integer or not_____________________________

// function checkInt(n){
//     let reg = /^-?[0-9]+$/
//     // if(reg.test(n)){
//     //     return true
//     // }
//     // return false
//     let res = reg.test
//     return res
// }
// let n = "kjsdk"
// console.log(checkInt(n))



//________________________by atul sir_____________________

//________________print 1 to 10__________

// function print (n){
//     if (n==11) return 
//     console.log(1);      // confusion here what we will add here
//     print (n+1)
// } print (10)

//_____________add 1 to n (using ternary operator)_________

// // ternary operator make a code smaller
// function add(n){
//     return n==0? 0: n+add(n-1); // ? act as if...if n==0 then return 0 else n+add(n-1) this is ternary operator


// } console.log(add (10))


//____________or(in if else)_

// function print (n){
//     if(n==0) return 0;
//     return n+print(n-1)
// } console.log(print(10))


//________________odd even in ternary

// function odd (n){

//     return n==0 ? 0 :odd(n%2);
    

// }console.log(odd(10))

//_________________fibonacci in ternary_____


function fib (n){
    return n<2 ? 1 : fib(n-1)+fib(n-2)

} console.log(fib (6))