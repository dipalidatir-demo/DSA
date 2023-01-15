//_______________________________________________________________BINARY SEARCH WITH RECURSION_______________

// let arr = [3, 7, 11, 34, 78, 90, 92, 96, 98]
// let num = 7
// let start = 0 // index==0
// let end = arr.length - 1 //index==8

// function binarySearch(arr, start, end, num) {
    
//     let mid = Math.floor((start + end) / 2)
    
//     //CASE 1
//     if(start>end){//-1
//        return false
//     }
//     //CASE 2
    
//     if (arr[mid] ==num) {
//         return true
//         // console.log(arr[mid]);

//     //CASE 3    
//     }
//     if (arr[mid] > num) {
//         return binarySearch(arr, start, mid - 1, num) 
//     }
//     //CASE 4
//     if(arr[mid] < num) {
//         return binarySearch(arr, mid+1,end , num)
        
//     }
    
    
// }
//     console.log(binarySearch(arr, start, end, num))


//__________________________________________________________704. Binary Search___________________________________________

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to 
// search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

//solution =>
// let nums = [-1,0,3,5,9,12]
// let target =[9]
//  function binarySearch(nums,target) {
//     high = nums.length-1    // end
//     low = 0                 // start  bcz nums in ascending order
   
//    while(low<=high){
   
//    let mid = Math.floor((low+high)/2)
   
//    if(nums[mid] == target){   // case1
//        return mid
//    } 
//    if(nums[mid]> target){
//        high = mid-1// case2
//    }
//    else{
//         low= mid+1 // case3
//    }
//    }

//    return nums[high] === target ? high : -1

//    } console.log(binarySearch(nums,target));


//_________________________binary search (geeks for geeks atul sir)

// Given an ascending sorted rotated array Arr of distinct integers of size N. The array is right rotated K times. Find the value of K.

// Example 1:
// Input:
// N = 5
// Arr[] = {5, 1, 2, 3, 4}
// Output: 1
// Explanation: The given array is 5 1 2 3 4. 
// The original sorted array is 1 2 3 4 5. 
// We can see that the array was rotated 
// 1 times to the right.
// Example 2:

// Input:
// N = 5
// Arr[] = {1, 2, 3, 4, 5}
// Output: 0
// Explanation: The given array is not rotated.


// let arr = [5,1,2,3,4]
// let n = 5

// function rotation ( arr,n){





// } console.log(rotation ( arr,n));
