




// ___________frequency counter  T.C = 0(n)


// let arr = [2,34,4,4,4,4,46,8,8,8,8,5,4,7]

// function frequency (arr){
// let map = new Map ()
// for(i=0;i<arr.length;i++){
//     if(map.get (arr[i]) == undefined){
//         map.set(arr[i] , 1)
//     } else {
//         map.set(arr[i], map.get(arr[i])+1)
//     }

// }  console.log(map);

// } frequency (arr)


//________________________multipointer____T.C = o(n)


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

//_____________________________sliding window_____________

//Sliding window algorithm is used to perform required operation on specific window size of given array
//you see the words “subarray” along with “contiguous”, you should immediately consider using the 
//sliding window algorithm.

//QueGiv.en an array of size n find the maximum value in a current window is sliding from left to right
 //where window size is 3 (w=3) and n=8 


 let arr = [1,3,-1,-3,5,3,6,7]

function slidingWindow (arr){
  let n = arr.length
  let w = 3
  let ans = 0

for(i=0;i<=n-w;i++){
let max = 0
for(j=0;j<i+w;j++){
  if(max<arr[i]){
    max=arr[i]
  }
} if(ans< max){
  ans=max
}

}return ans


} console.log(slidingWindow(arr));












//___________________________binary search _____________

// //search number using recursion

// let arr = [3, 7, 11, 34, 78, 90, 92, 96, 98]
// let num = 92
// let start = 0
// let end = arr.length-1

// function binarySearch (arr,start,end,num){
//     let mid = Math.floor((start+end)/2)

//       //CASE 1
//       if(start > end){ // -1
//             return false
//       }
//       //Case 2
//       if(arr[mid] == num){
//         return true
        
//       }
//       if(arr[mid]  < num){
//         return binarySearch(arr,mid+1,end,num)
//       }
//       if(arr[mid] > num){
//         return binarySearch(arr,mid-1,start,num)
//       }

// } console.log(binarySearch(arr,start,end,num));


