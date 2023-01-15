//______________________________________________binary search________________________________________________


// let even = [2,4,6,8,12,18]
// let odd = [3,8,11,14,16]

// function binarySearch (arr,size,key) {
// let start = 0
// let end = size-1
// let mid = (start+end)/2
// while(start <=end){
//     if(arr[mid] ==key){
//         return mid
//     }
//     if(key > arr[mid]) {
//         start = mid +1

//     } else {
//         end = mid -1
//     }
//     mid = (start+end)/2
// }
// console.log("index of 18 is"+ evenIndex);
// return -1
// } 
// binarySearch (even,4,20)
 

//____________________________________________________________bubble sorting_____________________________________

// let arr = [5,3,4,1,2]

// function sort (arr){
//     for(let i=0;i<=arr.length;i++){
//         let swap =false
//         for (let j=0;j<arr.length;j++){

//             if(arr[j]>arr[j+1]){                        //ascending order

//             arr[j]=arr[j]+arr[j+1]
//             arr[j+1]=arr[j]-arr[j+1]
//             arr[j] = arr[j] -arr[j+1]
//             swap=true

//         }
//     }
//     if (swap= false){
//         break;
//     }
    
//     }
//     return arr
// }
// console.log(sort(arr));

//_____________________________________________bubble sorting with ascendinding and descending order_____________


/*  Given an array of integers, sort the array in ascending/descending order by using bubble sort algorithm. 
Write a program to accept 3 parameters, an array A of integers, size of the array N and sorting order O (0 or 1).
Note: 
    0 represents ascending order.
    1 represents descending order.
    Input 
    0 
    9 
    4 3 6 8 9 2 1 5 7 
Where, First line represents the type of ordering. 
Second line represents the size of the array. 
Third line represents array elements. 
 Output  1 2 3 4 5 6 7 8 9 */

// let arr = [5,3,4,1,2]

// function bubbleSort (order,n,arr){
//     if(order==0)
//     for(let i=n;i>=0;i--){
//         let swap = true;
//         for( let j=0; j<i-1;j++) {
            
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//                 swap= false
//             }
//  }
//    } 
// return arr.join(" ")
//        }
//  for(let i=n;i>=0;i--){
//             swap = true;
//             for(let j=0;j<i-1;j++){
//                 if(arr[j]<arr[j+1]){
//                     [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//                     swap = false
//                 }
//             }
//             return arr.join(" ")
        

//        }bubbleSort (arr)




//_________________________________________________merge sort_________________________________________________

//let arrayX = [38,27,43,3,9,82,10]

// function mergeSort (arrayX,start,end){
// if(start>=end){           //base case
//     return
// }
// let mid = Math.round((start+end)/2)    // split/break array here
// mergeSort(arrayX,start,mid)        //left half part 
// mergeSort(arrayX,mid+1,end)        //right half part
// }

// function merge (arrayX,start,mid,end){
//     let arr1=[]                         //arr1 = [start ......mid]  left half part
//     let arr2=[]                          // arr2 = [mid+1 ......end]  right half part

// let lenArr1 = mid - start+1           // logic
// let lenArr2 = end - mid

// for(let i=0; i<lenArr1; i++){
//     arr[i]= arrayX[start+1]
// }

// for(let j=0;j<lenArr2;j++){
//     arr2[j]=arrayX[mid+1+j]
// }
// let a=0    // index of arr1
// let b =0   // index of arr2
// let c = start //index of arrayX

// while(a<lenArr1 & b<lenArr2){
// if(arr1[a]<= arr2[b]){
//     arrayX[c] = arr1[a]
//     a++
// } else{
//     arrayX[c] = arr2[b]
//     b++
// }c++
// } while (a< lenArr1){
//     arrayX[c]= arr1[a]
//     a++
//     c++
// }
// while(b< lenArr2){
//     arrayX[c]= arr2[b]
//     b++
//     c++
// }
// } console.log(mergeSort (arrayX,start,end));


//____________________________________________1st

let arr = [38,27,43,3,9,82,10]
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)
}
function merge(left, right) {
    let i = 0
    let j = 0
    let res = [] 
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            res.push(left[i])
            i++
        }
        else {
            res.push(right[j])
            j++
        }
    }
    while (i < left.length) {
        res.push(left[i])
        i++
    }

    while (j < right.length) {
        res.push(right[j])
        j++
    }
    return res
} console.log( mergeSort(arr));
    


//____________________________________3rd (pritesh sir)

// let array = [7, 5, 2, 3, 4, 1, 6, 9]

// //[7,5,2] <merge> [3,4,1,6]
// //step1:Recursion
// //step2:Merge

// let start = 0//index starting from 0==>left to right
// let end = array.length - 1//index starting from last index of an array element==>from right to left

// function mergeSort(array, start, end) {
//     if (start >= end) {//Base case for recursive call
//         return
//     }
//     let mid = Math.floor((start + end) / 2)

//     mergeSort(array, start, mid)//Recursive call takes place where starting index is 0 and ending index is 3 (mid=3)
//     mergeSort(array, mid + 1, end)//Again recursive call takes place where starting index is 4 (mid+1=4)
//     merge(array, start, mid, end)
//     // console.log(array)


// }
// mergeSort(array, start, end)
// console.log(array);

// //Second function for merging the two new arrays 
// function merge(array, start, mid, end) {
//     //Note ==> arr1 first index is start and last index is mid && arr2 first index is mid+1 and last index is end 
//     let arr1 = []//First new blank array
//     let arr2 = []//Second new blank array
//     // let arr1Len = mid - start +1
//     // let arr2Len = end - mid//Which is equal to ==> end-mid



// //_______________
//     //Copy the data in the respective array
//     // for (let i = 0; i < arr1Len; i++) {
//     //     arr1[i] = array[start + i]
//     // }

//     //Copy the data in the respective array
//     // for (let j = 0; j < arr2Len; j++) {
//     //     arr2[j] = array[mid + 1 + j]
//     // }
//     //____________________


//     for(let i=start;i<=mid;i++){

//         arr1.push(array[i])

//     }
//     for(let j=mid+1;j<=end;j++){

//         arr2.push(array[j])

//     }
//     let arr1Len=arr1.length
//     let arr2Len=arr2.length
//     let a = 0 //it is a index of arr1
//     let b = 0//it is an index of arr2
//     let c = start//it is an index of array

//     while (a < arr1Len && b < arr2Len) {
//         if (arr1[a] <= arr2[b]) {
//             array[c] = arr1[a]
//             a++
//         }
//         else {
//             array[c] = arr2[b]
//             b++
//         }
//         c++
//     }
//     while (a < arr1Len) {
//         array[c] = arr1[a]
//         a++
//         c++
//     }
//     while (b < arr2Len) {
//         array[c] = arr2[b]
//         b++
//         c++
//     }
// }


