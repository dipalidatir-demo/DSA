//___________________________________if else__________________________________

// use for condition 

let age = 56;
const doesDrive = true;       // this statement decide you can drive or not with true and false
const doesDrive1 = false
let b = 'girl'


if(age == 24){
    console.log("age is equal to 19"); 
     // agar 24 hai
} else if ( age == 56){  // agar hmne yaha else if nhi lagaya sirf if , if conditions lagayi to to vo sari if ko check krte jayega aur jitni condition true ho rhi hai sbko print kr dega
                         // aur else if lagaya to if ke bad directly else if check krega agar if satisfied nhi huyi tohi else if jayega
    console.log("age is equal to 56"); // agar 56 hai
}

else {
    console.log("age is not equal to 19"); // upar ke 2 condition satisfied nhi ho rhi to ye print kre
}
//______________and (&&)_________________________

//doesDrive = true && age>18 = true   => both condition are true
if (doesDrive && age > 18 ){   // agar doesDrive true hai and age gretar than 18 hai means dono condition true hai to app drive kr skte ho 
    //if (doesDrive){              // you cannot drive
    console.log('you can drive (with 2 and condition)');
} else{
    console.log('you cannot drive');
}

//________________or (||)_____________________

 //doesDrive1 = false || age > 18 = true  => one conditon is true
if(doesDrive1 || age > 18) {      // if one condition is true then you can drive
    console.log('you can drive (with 2 or condition)');
}else{
    console.log('you cannot drive');
}


//__________________using 3 condition________________

if (doesDrive && age > 18 && b == 'boy' ){    // agar doesDrive true hai and age gretar than 18 hai and b boy hai means 3 condition true hai to app drive kr skte ho 
    //if (doesDrive){              // you cannot drive
    console.log('you can drive ');
} else{
    console.log('you cannot drive (with 3 and condition)');
}


//let age = 56;
//const doesDrive1 = false
//let b = 'girl'

if (doesDrive1 || age > 18 || b == 'boy' ){    // agar 3 condition me se ak true hai to app drive kr skte ho 
    //if (!doesDrive){              // you cannot drive
    console.log('you can drive (with 3 or condition)');
} else{
    console.log('you cannot drive');
}





//_______________________________typeOf___________

if( typeof vari !== 'undefined'){
    console.log('vari is defined');
}

else{
    console.log('vari is not defined');
}

//____________________operators_________________________

// = assign value
// == compare value
// === check data type also e.g=
// !=  value not equal
// !== value and datatype not equal
// &&  (and) dono condition true honi chahiye
//  || (or) dono me se 1 condition true honi chahiye

let a = '4'  // value in string
 if(a === 4){  // this 4 not in string so output become false
    console.log("true");
 } else{
    console.log("false");
 }





 //_________________________________ternary operator( use for condition) ______________________

 console.log(age == 45 ? 'age is 45' : 'age is not 45' ); // isme age 45 hai to true aayega




//_________________________________switch case__________________


let age1 = 19

switch (age1){   // switch(key)
case 19:        // case(value)
    console.log(" you are 19");  
break;                          // condition true hai to break kr do

case  19:        // case(value)
    console.log(" you are 19");  
break;

case 56:        // case(value)
    console.log(" you are 59");  
break;


default:                          // ak bhi condition true nhi hai to deafault  ye print kro like 0 
    console.log(" you are unknown age");
break;



}


