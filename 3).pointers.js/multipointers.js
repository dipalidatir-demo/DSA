//______________^^^two pointers method^^^_____________

//______________1).find sum of pair of 0_______

// let arr = [1, 5, 8, 6, 6, 1, 2]

// function sumOfPair(sum) {  //we can give any name here in bracket like sum

//     count = 0
//     for (i = 0; i < arr.length; i++) {
//         for (j = 0; j < arr.length; j++) {
//             if (arr[i] + arr[j] == sum) {
//                 result = true
//             }
//         }
//     } return result
// }

// console.log(sumOfPair(14)); // we call function here with value which we want of sum

//___________ using while loop (better solution with low time complexity = o(n))

// let arr = [1, 5, 8, 6, 6, 1, 2]  //sorted array
// let sum = 6
// function sunOffPair(sum) {

//     let i = 0;
//     let j = arr.length - 1
//     //let result = false

//     while (i < j) {

//         if (arr[i] + arr[j] == sum) {

//             // result = true
//             return [arr[i], arr[j]]

//             //break;

//         } if (arr[i] + arr[j] > sum) {
//             j = j - 1  //j-=1  //j--

//         } else if (arr[i] + arr[j] < sum) {
//             i = i + 1  //i+=1  //i++
//         }
//     } return [arr[i], arr[j]] // return result

// }
// console.log(sunOffPair(sum));


//___________________2).find sum of pair which is closest to 12_
// let arr=[1,2,5,8,9,14]

// function closestSumPair(arr){
// let result = []
// let distance = Infinity
// let j = arr.length-1
// let i =0

// while(i<j){
// if(Math.abs(arr[i]+arr[j] -12) < distance ){

//     result= [arr[i],arr[j]]
//     distance = Math.abs(arr[i]+arr[j]-12)

// } if(arr[i]+arr[j] -12 > 0){
//     j-=1
// } else if (arr[i] + arr[j] < 0){
//     i+=1
// }

// } 
// return result
// } console.log( closestSumPair(arr));