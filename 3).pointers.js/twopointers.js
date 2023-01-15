//___________________________rotate an array(two pointers methods)_____________________

let arr = [3,5,2,7,5,9,3,2,6]
let n= arr.length

function ReverseArr (arr){
    let i =0 
    let j = arr.length

    while( i != j){
      let temp = arr[i]
        arr[i] = arr[j]
        
        //console.log(temp);
    } 
    return temp

} console.log(ReverseArr(arr))

//____________________________________________________sum
// let arr = [1,4,6,7,9,2] //sum of two pointer

// let sum =10

// for(i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j]==sum){
        
    
//         }
//     }
// }console.log(sum)


//____________________________________________________count
// let arr = [1,4,6,7,9,2] //count of two pointer

// let sum =10
// let count=0
// for(i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j]==sum){
//           count++
    
//         }
//     }
// }console.log(count)

//_________________________difference

// let arr = [1,4,6,7,9,2]

// let diff = 100;

// for(i=0;i<arr.length;i++){

//     for(j=i+1;j<arr.length;j++){

//         if(arr[i]-arr[j]==2){

//         }
//     }
//     }
// console.log(diff);

//_______________________________________