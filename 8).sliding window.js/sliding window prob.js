//______________________________________^^^^^^^^find maxValue^^^^__________________

//Sliding window algorithm is used to perform required operation on specific window size of given  array


// //Given an array of size n find the maximum value in a current window is sliding from left to right
// //where window size is 3 (w=3) and n=8 

//  let arr=[1,3,-1,-3,5,3,6,7]
// // // //[|1,3,-1|,-3,5,3,6,7]  3
// // // //[1,|3,-1,-3|,5,3,6,7]  3
// // // //[1,3,|-1,-3,5|,3,6,7]  5
// // // //[1,3,-1,|-3,5,3|,6,7]  5
// // // //[1,3,-1,-3,|5,3,6|,7]  6
// // // //[1,3,-1,-3,5,|3,6,7|]  7

// function maxValue (arr){
// let n=arr.length   // values in array
// let w=3            // window value =k =3
// let ans=0

// for(i=0;i<=n-w;i++){  // i<=8-3 = 5 // ye loop sirf 5 tak chalega kyonki hme vaha tak hi chalana hai
//     // console.log(arr[i]);
//     let max=0    // for find max value
//     for(j=i;j<i+w;j++){   // j< index value + 3 // iski last value 5 hogi bcz i 5 tak chal raha hai so //5+3 =8 to e loop pura chaleg
//         //console.log(arr[j]);
//         if(max<arr[i]){    //  yaha agar max ki value arr[i] se less huyi to arr[i] ki value max me store hoti rahegi condition true rahegi tabtak
//             max=arr[i]      //arr ki max value max me store hogi // last value 7 hogi
//             // console.log(max);
//             }
//     }
//     if(ans<max){  //here max ki value 7 ans me store hogi agar ans< max hoga tabtak
//         ans=max // ans ki last value 7 hogi
//         //console.log(ans);
//     }
// } return ans;
// } console.log(maxValue(arr))
// //console.log("the maximum value in a current window is sliding from left to right is"+" "+ans);


//_________2nd approach

//  let arr=[1,3,-1,-3,5,3,6,7]
//  let k =3
//  function maxmumValue(arr,k){
//   let n= arr.length
//    let result = []
// for(let i=0;i<n-k+1;i++){
//     let max = arr[i]
//  for(let j=i;j<i+k;j++){
//         if(max<arr[j]){
//             max=arr[j]
//         }
//     }
//     result.push(max)
// } return result
//  } console.log( maxmumValue(arr,k));

//____________3rd approach 

// let arr=[1,3,-1,-3,5,3,6,7]
// let k =3
// function maxmumValue(arr,k){
//  let n= arr.length
//   let result = []
// let res=[]
// for(i = 0; i<k; i++){
//     while(res.length>0 && arr[i]>=arr[res[res.length-1]]){
//         res.pop()
//     }
//     res.push(i)
// }
// for(let i = k; i<n; i++){
//     result.push(arr[res[0]])
//     while(res.length>0 && arr[i]>=arr[res[res.length-1]]){
//         res.pop()
//     }
//     while(res.length>0 && i-k>=res[0]){
//         res.shift()
//     }
//     res.push(i)
// }
// result.push(arr[res[0]])
// return result
//  }
// console.log(maxmumValue(arr,k));
//_______________________________________________find max sum ______________________


// let arr=[1,3,-1,-3,5,3,6,7]
// let k = 3
// function maxValue (arr,k){
//     let sum = 0

//     if(arr.length < k){
//         return;
//     }
//       let max =-Infinity
//       for(let i=0;i<k;i++){  // this will check till 3 only
//         sum +=arr[i]

//       }
//     //  i=3;   3 se start hoga
// for(let i=k;i<arr.length;i++){  // this will check after 3 
// //   -1 += arr[3] - arr[3-3]
//     sum+=arr[i]-arr[i-k]  
//     max=Math.max(max,sum)
// }

// return max
// }console.log( maxValue (arr,k));



//_______________2nd approach

// function sumArr(arr,n,k){
//         let maxSofar = 0 
//         //    let  maxSofar =  -Infinity
//     // start a loop from first index and go till last index - k
//     	// because for every index we want to sum the next k elements.
//     for(let i=0; i<=n-k; i++){
//         let sum =0
//         // use another loop to add next k elements
//         for(let j=i; j<i+k; j++){
//             sum += arr[j]
//             maxSofar = Math.max(maxSofar, sum); ////update 
//         }
//     }
//      return maxSofar;

// //__________3rd approach

//     let maxSum = 0
//     let currSum = 0
//     for(let i=0;i<k;i++){
//         maxSum += arr[i]
//         currSum = maxSum
//     }
//     for(let j=k;j<n;j++){
//         currSum += arr[j] - arr[j-k]
//         maxSum = Math.max(maxSum,currSum)
//     }
//     return maxSum
//     }
//     console.log(sumArr(arr,n,k))
    


//_____________________________________________^^^^^^^^^^sliding window finalmax value^^^^^^^________________

// let arr = [10, 1000, 2000, 50000, 700000]
// let w = 3
// let n = arr.length  //5
// let finalMax = 0

// function slidingWindow(arr, n, w,finalMax) {
//     for (let i = 0; i <= n - w; i++) {
//         // console.log(arr[i]);
//         let max = 0;
//         for (let j = i; j < i + w; j++) {
//             //console.log(arr[i],arr[j]);
//             if (max < arr[j]) {
//                 max = arr[j]
//  }
//  }
//         if (finalMax < max) {
//             finalMax = max
//         }
//     } 
//     return finalMax
// }
// console.log(slidingWindow(arr, n, w,finalMax))


//__________________________________________find longest substring___________________


// function longestSubString (s){
//     let map = {}
//     let max=0
//     let j=0
//     let i=0

// while(i <= s.length){
//     if(!map[s[i]]){
//         map[s[i]] = 1

//         max = Math.max(max, i-j+1)
//         i++
//     } else{
//         delete map[s[j]]
//         j++
//     }
// }
// return max
// }
// let s ="abcabcbb"
// console.log(longestSubString (s));

//____________________________________2nd approach____________
// let s = "ahdbgaao"
// function longestSubS(s) {
//     var map = new Map();
//     var i = 0;
//     var ans = 0;

//     for (var j = 0; j < s.length; j++) {
//         if (map[s[j]]) {
//             if (map[s[j]] > i) {
//                 i = map[s[j]];
//             }

//             map[s[j]] = j + 1;

//             if (j + 1 - i > ans) {
//                 ans = j + 1 - i;
//             }
//         }
//         return ans;
//     }
// }console.log(longestSubS(s))