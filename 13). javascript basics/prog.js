//________________________________________________________operator________________


// var x="Namaste", y="world"; // string operator
// x= x+ " "+y;
// x



//______________________________________________________split__________________


// let dipali = "nikita";
// let result=dipali.split(" ")
// console.log(result);

//_____________________________________________________tables________________________________


// let table = 5
// for(let i=1; i<=10 ; i++){
    
//      product = table*[i]
//      console.log(product); //take the seperate variable for store multilpcation
        
//     }


// let product =4;

// for(let i=1;i<=10 ; i++){
    
//     table = product*[i]

//     console.log(table);
// }
// // console.log(table); //  if console print outside then it only print last o/p


    
// for(i=1;i<=10 ;i++){

//     if(i%5 ==0){ // simple multiplication
        

//     }console.log([i]);
// }

    
//________________________________________splice___________________





// let arr=[1,2,4,6]

// let res=arr.splice(0,4)

// console.log(arr)


//___________________________subtraction with function___________

// function dipali(datir) {
//     //here we use 2 two function with 3 parameter in callback funtion
// console.log(datir)
// }

// function nikita(a, b, myFun) { // here use c to store value of a-b in C and call C using third parameter i.e myFuc

// let c = a - b;
// myFun(c);

// }

// nikita(8, 2, dipali); //when two function together then andar ka function tabhi call hoga agar 1st function kom koi value
// //nahi mili  aur vo call nhi hua .agar milti hai to 2nd function tak loop nhi jata
// nikita(9, 6, dipali);

//___________________________________sum________________________________

// sum();

// function sum() {
//   var a = 10;
//   var b = 20;
//   var add = a+b;
//   console.log(add);
// } // made function here use to compelete task and jo hame call krna hai vo hame {} add krna hota hai...
//   // function ka output aane ke liye function ko call krna imp hota hai ex- sum();

//  //_____________________we can call function many times________________________

//   // we call function many times for getting ouput from different values at time

//   sum(19, 30);
//   sum(29, 30);
//   sum(10, 20);

//   function sum ( a , b){ 
//     var add = a+b ;
//     document.write(add);
//   }

//   // this is use for print table also
//   sum(1, 2);
//   sum(2, 2);
//   sum(3, 2);
//   sum(4, 2);
//   sum(5, 2);
//   sum(6, 2);
//   sum(7, 2);
//   sum(8, 2);
//   sum(9, 2);
//   sum(10, 2);
// function sum ( a , b){ 
//  var add = a+b ;
//  document.write(add);
//   }




//   //__________________________how many ways we can write a function___________________

//   //JavaScript a function allows you to define a block of code, 
//   // give it a name and then execute it as many times as you want.
//   //  A function can be defined using function keyword and can be executed using () operator.

// //1) function declaration
// function square1(x){
//   return x*x ;
// }
// //2)function expression
//  const square2= function(x){
//   return x*x;
//  }

//  //3) arrow function expression

//  const square3 = (x) => {
//      return x*x;
//  }

//  //4) concise arrow function expression

//  const square4 = x => x*x


 //____________________________________________function with parameter____________________

//  1.1) when value passed by call function

// function dipali (fname,lname){

//   let fullName=(fname+lname)
//   console.log(fullName)
// };
// dipali ("nik"," dd"); //we can change value from here 

//1.2) we can give value in parameter and change it via call function

//  function dipali (fname="dipali", lname="datir"){
//   var fullName=(fname+lname)
//   console.log(fullName);
//  } dipali("nikita "," datir") // value change from here value become override means replace

//1.3) add values

// function dipali (c,d){

//   let sum = c+d;
//   console.log(sum);
// }
// dipali(7,8)



//____________________________________________multiply two elements___________________

// function product (a,b){

// } return (a*b)
// multiply (7,8)

// console.log(multiply);



//______________________________________________even nub by prompt function____________

// let prompt=require("prompt-sync")()

// let prompt1=prompt("enter your num-")


// if(prompt1%2==0){
// console.log(prompt1+" "+" is even nub")
// }



//_____________________ odd nub using while loop____________

let i =0
while(i<100){
    i+=1
    console.log(i++);
}



