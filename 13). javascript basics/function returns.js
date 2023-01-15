// 1]   if don't return anything it will freturn undefined

 function text ()
 {

 }

 console.log(text());

 // output is =  "undefined"     bcz it doesn't return anything




// 2] it only use return value 

function name (){
return "hello"
}
 console.log(name());

 // ouput is = "hello"   bcz we return value here



// 3] use 2 times return 

function dip (){
    return "hii"
    return "hello"

}
console.log(dip());

// output is = "hii"   bcz  ones you return the function then it will stop executing so 2nd return will not work


// 4]  






//__________________________function scope__________________________---

function myFun (){
    var myName = "dipali"
    console.log(myName);
}
myFun()

//__use console.log after call function then it will give reference error bcz its function scope

// function myFun (){
//     var myName = "dipali"
    
// }
// myFun()
// console.log(myName);

//_____________________________________block scope__________________________________

if(true){
    let name = "dip"
    console.log(name);
}



//_____ if use console.log outside the curly bracket it will give reference error

if(true){
    let name = "dip"
}
console.log(name);




