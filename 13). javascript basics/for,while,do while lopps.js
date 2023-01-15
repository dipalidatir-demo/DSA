//___________________________loops( there is 3 loops => for,while,do while___________________________________________
// loops khud ko repeat krta rehta hai jab tak ak specific condition false na ho jaye
// loops use for agar kabhi bhi hame koi cheeze repeat krni hoti hai like 1 se 1000 tak print karana ho ya ak cheeze bahot bar krni ho to hum vo loop se kar skte hai 


//______________________________for loop___________________________

// // incerement or add
// let a = 23
// a +=1; // add 1 in 23 now a = 24
// a++     // 24 incerese by 1 now a = 25
// console.log(a);


//  //1) for loop

// for (let i=0 ; i<100; i++){

//    console.log(i);    // i  is index value so i=0 then start print from 0 to 99
// }



// ________________________________while loop_____________

// let i = 0                  // yaha i ki value 0 hai aur hamne condition di hai ki i ki value 100 se kam ho tab tak loop chalao to ye loop chalata hi rhega infinity tak jayega stop nhi hoga
// // agar hamene i++ kiya to i ki value increse hoti rhegi to jab i ki value greater than 100 hogi to loop stop ho jayega

// while (i < 100) {
//     // i+=1                 // aise bhi hum increse kr skte hai i ko bcz i ki initial value 0 hai yaha se 1 to 100 print hoga
//     // i++;               // yaha se increse kr skte hai i ko andaha se incere kiya to 1 to 100 print hoga
//     console.log(i++);     // yaha se bhi kr skte hai i ko incerse but yaha se kiya to 0 to 99 print hoga


//     /*console.log(i+3); //aise bhi hum print kr skte aur start 3 se hogi 3 to 102
//     i+=1 */

// }



//_______________________________do while(not) _____________________________

// let k =0
// do {
    
// // k++          // k++ agar console ke pehle ke kiya to 1 to 100 print hoga                    
// console.log(k++);            //start incerese from 0 to 99

//  //k++              // k ko console ke bad print kiya to 0 to 99 print hoga

// } while (k<100);    // add condition here




//break & continue


//______________________________for each() with function for iterate array_________________________

let arr = [2,5,6,4,3,2]
arr.forEach(function (arr){
    console.log(arr);
})

// _____also you can change the name of element in array

let arr1 = [2,3,5,7,8,9]
arr1.forEach(function(element){
    console.log(element);
}
)
//_____________this is equal to for loop_____
for(let i=0;i<arr1.length;i++)
{
    let element= arr1[i]
    console.log(element);
}

//_____________you can add different argument in fo each function like element,index,array 
//in this we can print value of array ,index of that value and whole array

arr1.forEach(function(element,index,array){

    console.log(element,index,array);

});




//_______________________________in for loop for object_________________

//in use for object 

let obj ={
  name: "dip",
    age: 25,
    type:"developer",
    os:"window"
}

for(let i in obj){
// you can give any name in for loop like i ,j,k

console.log(`the ${i} of object is ${obj[i]}`);

}


//


