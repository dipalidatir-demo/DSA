{ // this is called block and this is empty so it will returns nothing
}   // this is also called compound statement


///_______________use of block {}

// it is use to combine multiple javascipt statement into group
// ex = >
{
var a =10       // this is group of statement in block
console.log(a);
}

//_______________use of group of statements

// it is useful when javascript required only one statement so group of statement act as one statement
//like if else condition, for loop, while loop block is required here bcz there is need group of statements 
//ex =
if(true){
    var a =10
    console.log(a);
}

//....if you only use 1 statement then no need of block
//ex =
if(true) console.log(a);




//___________________________block scope__________

// block scope means what all variable and function we can access inside the block
// lets see behaviour of variable inside the block
// ex=>
{      
    var x = 10
    let y = 30
    const z = 40
}


//use debugger on it for check
// let and const are reserved for block scope it means they are block scope. they have seperate space in block
// but var hoisted in  global scope

// so it means you can't be access let and const outside the block scope
// but var you can acess outside the block bcz it is global scope
// ex =>
{      
    var l = 10
    let m = 30
    const n = 40

    console.log(l);
    console.log(m);
    console.log(n);
}

console.log(l);
console.log(m);
console.log(n);

// output is lmnl it means let and var can not be acess outside the block but var can acess bcz it is global



//_______________________________shadowing in js

// if you have same name variable outside the block it means this shadowing of of that variable

var a =10
{
var a = 10   // this is shadow of variable a
}

















