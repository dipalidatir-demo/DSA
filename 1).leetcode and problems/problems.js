//____________________^^^^^^^^^^^^^^^^^^^^^^^remove duplicate from sorted array^^^^^^^^^^^^^^_____________


// let nums=[1,1,2,2]

// function duplicates(nums){
//     let start = 0
//     let len = nums.length
// for (i=0;i<len;i++){
//     if (nums[i] != nums[i+1]){
//         nums[start] = nums[i]
//         console.log(nums[start]);       // for repeated number
//         start ++                    // for count
//     }
// }  return start

// } console.log(duplicates(nums))

//_____________________________________^^^^^^^^^^^^^^^^remove element^^^^^^^^^^^^6____________________

// let nums = [3,2,2,3,1,4]
// let val = 2
// function removeElement ( nums, val){
//     //let newEle = 0                             // additional
//     for ( i=0 ; i<nums.length; i++){
//         if ( nums [i] !== val){
//             console.log(nums[i]);
//            // nums[newEle] = nums[i]              // additional
//            // newEle ++                             // additional
//         }
//     }return ""
//      // return newEle                                      // additional
// } console.log(removeElement ( nums, val));


//**________________________________________________________jump game_____________
// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.






//__________________________________________________^^^^^^^^^^^^^find value of index^^^^^^^^^^^^_____________________________




// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// let arr = [1,3,5,6]
// let tagret = 6
// for (i=0;i<arr.length;i++){
//     if(arr[i] == tagret){
//         console.log(i);
//     }
// }
// return i


//_____________________________^^^^^^61636. Sort Array by Increasing Frequency^^

// Given an array of integers nums, sort the array in increasing order based on the
//  frequency of the values. If multiple values have the same frequency, sort them in decreasing order.
// Return the sorted array.
// Example 1:
// Input: nums = [1,1,2,2,2,3]
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.


// solution =>

// let nums =  [1,1,2,2,2,3]
// function SortArray(nums){
//   let ans =0
//   let maxFreq = 0
//     let map = new Map()
//     for(let i of nums){
//         map[i]= (map[i]+1 )|| 1 
//       maxFreq = map[i]

// }
//    for( let [key,value] in  map){
//     if( value > 1){
//         key = ans

//       }
//     } 
//   return nums.sort((a,b) => map.get(b) - map.get(a) || b-a)


// } console.log(SortArray(nums));

//__________________________________________2nd approach


// function SortArray(nums){
//   const map = new Map();
//   for (let n of nums) {
//       map.set(n, (map.get(n) + 1) || 1);
//   }
//   return nums.sort((a, b) => map.get(a) - map.get(b) || b - a)

// }console.log(SortArray(nums));


//____________________________________________2404. Most Frequent Even Element________

//Given an integer array nums, return the most frequent even element.
//If there is a tie, return the smallest one. If there is no such element, return -1.
//Example 1:

// Input: nums = [0,1,2,2,4,4,1]
// Output: 2
// Explanation:
// The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
// We return the smallest one, which is 2.
//solution =>

//**approach 1______ */

// nums = [0, 1, 2, 2, 4, 4, 1]

// function mostFrequentEven(nums) {
//  //nums.sort((a,b) => a-b)
//   let result = []
//   let myMap = new Map();

//   for (let i of nums) {
//     if (i % 2 == 0) myMap.set(i, myMap.get(i) + 1 || 1)

//   }
//   if (myMap.size == 0) return -1;

//   for (let [key, value] of myMap) {
//     result.push([key, value]);

//   } return result

//   // return result.sort((a, b) => {

//   //   if (a[1] == b[1]) return a[0] - b[0]
//   //   else return b[1] - a[1];
//   //}) // [0] [0]

// } console.log(mostFrequentEven(nums));

//**2nd  approach __________ */

//  function mostFrequentEven(nums) {

//  // nums.sort((a,b) => a-b)

//   let myMap = new Map()
//   for (let i of nums){
//     if(i%2 == 0){
//       if(!myMap.has(i)){
//         myMap.set(i ,1)
//       }
//       else {
//         myMap.set(i,myMap.get(i) +1)
//       }

//     }
//   }
//   let ans = -1
//   let maxFreq =0
//   for(let [ key , value] of myMap ){
//     if(value > maxFreq){
//       ans = key
//       maxFreq = value
//     }

//   }
//   return ans

//  } console.log(mostFrequentEven(nums));




//____________________________219. Contains Duplicate (assignment)

// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true


//solution =>
//_____________(my solution)

// let nums= [1,2,3,1]
// let k =3
// function duplicate(nums,k){

//   let i=0
//   let j=nums.length-1

//   while(i<j){
//       if(nums[i]== nums[j]  && (Math.abs(i-j) <= k)){
//       return true
//         } else{
//           return false
//         }
//   }//return nums
// }console.log(duplicate(nums,k));  


//___________2nd solution 

// let nums= [1,2,3,1]
// let k =3
// function duplicate(nums,k){ 
// let myMap = new Map()
// let temp =0
// for(let i of nums){
//   if(myMap.get(nums[i])>=0){  // =0
//      temp = myMap.get(nums[i]) 
//     if(i - temp <= k){
//       return true
//     }
//   }
//   myMap.set(nums[i],i)   //if condition become then se value in mymap
// }
// return false
// } console.log(duplicate(nums,k));


//______________________________125. Valid Palindrome (neetcode)

//A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and 
// removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric 
// characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// s = s.replace(/[^0-9a-zA-Z]+/gmi,"");
// s = s.toLowerCase();
// var l = 0, r = s.length - 1;
// console.log(s);

// while(l<r) {
//     if(s.charAt(l) != s.charAt(r)) {
//         return false;
//     }
//     l++;
//     r--;
// }
// return true;
// };
// //_____3rd
// s = s.replace(/[^a-zA-Z0-9]/g, '')
// function rec(s) {
//     if (s.length === 1 || s.length === 0) {
//         return true
//     }
//     if (s[0].toLowerCase() === s[s.length-1].toLowerCase()) {
//         return rec(s.substring(1, s.length-1))
//     }
//     return false;
// }
// return rec(s)
// };





//__________________________167. Two Sum II - Input Array Is Sorted_________________________________________

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
// Your solution must use only constant extra space.
// Example 1:
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].


// function twoSum (numbers, target) {

//     let p1=0
//      let p2=numbers.length;

//         while(p1<p2){

//             if(numbers[p1]+numbers[p2]==target) {
//                 return [p1+1,p2+1]
//             }
//             else if(numbers[p1]+numbers[p2]<target){
//                  p1++;
//             }
//             else{
//                  p2--;
//             }
//         }


// } console.log( twoSum ([2,7,11,15], 9));


//____________________________________________169. Majority Element_________________

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
//  You may assume that the majority element always exists in the array.
// Example 1:
// Input: nums = [3,2,3]
// Output: 3


// let nums =[3,2,3]
//  function majority (nums) {
//     var obj = {};
//     for(var i = 0; i < nums.length; i++){
//         obj[nums[i]] = obj[nums[i]] + 1 || 1;
//         if(obj[nums[i]] > nums.length / 2) {  // bcz  the element that appears more than ⌊n / 2⌋ times.
//             return nums[i]     // here return nums[i] bcz we want to return number which is repeated more times
//         }
//     }

// }console.log(majority (nums));


//_______________________________________________229. Majority Element II_____________________________

// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
// Example 1:

// Input: nums = [3,2,3]
// Output: [3]


// let nums =[3,2,3]

// function majorityElement(nums){
// let map = new Map()
// let arr =[]

// for(let i of nums){
//     map.set(i,map.get(i)+1 || 1)
// }

// for(let [key,value] of map){
//     if(value> Math.floor(nums.length/3)){
//         arr.push(key)
//     }
// } return arr

// } console.log(majorityElement(nums));


// //___________2nd approach by set map()_____________________

// function majorityElement(nums){
// let map = new Map()
// let arr=[]

// for(let i of nums){
//     if(map.has(i)){
//         map.set(i,map.get(i)+1)
//     } else{
//         map.set(i,map.get(i) || 1)
//     }
// }
// for(let [key,value] of map){
//     if(value > Math.floor(nums.length/3)){
//         arr.push(key)
//     }
// } return arr

// } console.log(majorityElement(nums));



//____________________________242. Valid Anagram_______________

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of
//  a different word or phrase, typically using all the original letters exactly once.
//  Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

//_______1st

// let s = "anagram"
// let t = "nagrama"

// function anagram (s,t){
//   if(s.length != t.length){
//     return false
//   }
//  let s1 = s.split("").sort().join("")
//  let t1 = t.split("").sort().join("")

//   //console.log(s1);
//   //console.log(t1);
// if(s1==t1){
//   return true
// }  else{
//   return false
// }
//  }console.log( anagram (s,t));



//____2nd____(this logic use for 2 string frequency)

// let s = "anagram"
// let t = "nagrama"

// function anagram(s, t) {
//   let len1 = s.length
//   let len2 = t.length
//   if (len1 != len2) {
//     return false
//   }
//   let map = {}
//   for (let i of s) {
//     map[i] = (map[i] + 1) || 1
//   }
//   for (let j of t) {
//     if (!map[j]) {
//       return false
//     }
//     else {
//       map[j] = map[j] - 1
//     }
//   } return true

// } console.log(anagram(s, t));


//___________________________121 buy and sell stock________

// let nums = [7,1,5,3,6,4]

// //brute force
// function maxProfit(nums){
// let profit = 0

// for(let i=0;i<nums.length;i++){
//   for(let j=0;j<nums.length;j++){
//     profit=Math.max(profit,profit[j]- profit[i])
//     }

//   } return ""

// } console.log(maxProfit(nums));


//___________________________________________________76. Minimum Window Substring____________

// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
// The testcases will be generated such that the answer is unique.
// A substring is a contiguous sequence of characters within the string.
// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// solution => (not work)


// let s="ADOBECODEBANC"
// let t = "ABC"
// function minSub(s,t){
//     let len1= s.length
//     let len2=t.length
// for(let i =0;i<len1;i++){
//     console.log(s[i])
//  for(let j=0;j<len2;j++){
//    console.log(t[j])
//   if(s[i++] == t[j++]){
//      return s[i++],t[j++]
//  }else{
//      return ""
// }
//  } //return s[i]
//  } 
// } console.log( minSub(s,t));





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




//______________________________________________680. Valid Palindrome 

// Given a string s, return true if the s can be palindrome after deleting at most one character from it.
// Example 1:
// Input: s = "aba"
// Output: true
// Example 2:
// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.



// let s ="abac"
//  function validPalindrome(s) {

//  let start = 0
//  let end = s.length-1

//  function palindrome(s,start,end){
// while(start<end){
//  if(s.charAt(start++) !== s.charAt(end--)) {
//     return false
//  }
 
//  } return true
//  }
// while(start<end){
//     if(s.charAt(start)!== s.charAt(end)){
//        return palindrome(s,end,start+1)  ||
//         palindrome(s,start,end-1)
//     }
//     start++
//     end--
// }
// return true

// } console.log(validPalindrome (s));


//___________________________________1984. Minimum Difference Between Highest and Lowest of K Scores_______________

// You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. 
// are also given an integer k.
// Pick the scores of any k students from the array so that the difference between the highest and the lowest 
//of the k scores is minimized.
// Return the minimum possible difference.
// Example 1:
// Input: nums = [90], k = 1
// Output: 0
// Explanation: There is one way to pick score(s) of one student:
// - [90]. The difference between the highest and lowest score is 90 - 90 = 0.
// The minimum possible difference is 0.


// let nums = [9,4,1,7]
// let k=2

//  function minimumDifference(nums,k) {

//   let minimum = Infinity;
//   nums.sort((a, b) => b - a);

//   for (let index = 0; index <= nums.length - k; index++) {
//     const max = nums[index];
//     const min = nums[index + k - 1];

//     minimum = Math.min(minimum, max - min);
//   }
//  return minimum;
  
// } console.log(minimumDifference(nums,k));


//________________________________________________344. Reverse String______________

// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.
// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

//solution => when string not in array

// let str =["h","e","l","l","o"]
// function reverseWord (str){
//   if(str.length === 0) return " "  // base case
//   return reverseWord (str.slice(1)) + str[0]  // use slice for reverse from index 1 str[0] = "i",str[1]= "am"
  
// }

// function reverseSen(str){  //   for sentence
//   let arr = str.split(" ") // convert in array
//   for(let i=0;i<arr.length;i++ ){ //reverse
//       arr[i]=reverseWord(arr[i]) // use recursion here but indirect recursion bcs we call upper function here
//   }
//   return arr.join(" ") // remove array
// }

// console.log(reverseSen(str)); // call function

  

// solution when array in string

// let s =["h","e","l","l","o"]
// function reverseWord (s){
//     let left = 0;
//   let right = s.length - 1;

//   while (left <= right) {
//     [s[left],s[right]] = [s[right],s[left]]
//     left++;
//     right--;
//   }
//   return s;
  
// }console.log(reverseSen(s)); // call function

//______________________________________________________________

// var reverseString = function(s) {
    
//   let left = 0;
//   let right = s.length - 1;

//   while (left <= right) {
//     [s[left],s[right]] = [s[right],s[left]]
//     left++;
//     right--;
//   }
//   return s;
// };

//___________________________________________________________283. Move Zeroes__________

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// //solution
//let nums = [0,1,0,3,0,12]

// function moveZeroes(nums){
//   let j = 0  // nonzero count

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
// 	  // swap elements
//       [nums[j], nums[i]] = [nums[i], nums[j]]
//       j++
//     }
//   } return nums
// }console.log( moveZeroes(nums));

//________________________________________________________15. 3Sum_________________

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
//  such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// let nums = [-1,0,1,2,-1,-4]
// function threeSum(nums) {
// 	const results = []

// 	// obviously irrelevant if we don't have at least 3 numbers to play with!
// 	if (nums.length < 3) return results

// 	// having the numbers in ascending order will make this problem much easier.
// 	// also, knowing the overall problem  will take at least O(N^2) time, we can
// 	// afford the O(NlogN) sort operation
// 	nums = nums.sort((a, b) => a - b)

//     // if the question asks us for a custom target, we can control it here
// 	let target = 0

// 	for (let i = 0; i < nums.length - 2; i++) {
// 		// `i` represents the "left" most number in our sorted set.
// 		// once this number hits 0, there's no need to go further since
// 		// positive numbers cannot sum to a negative number
// 		if (nums[i] > target) break

// 		// we don't want repeats, so skip numbers we've already seen
// 		if (i > 0 && nums[i] === nums[i - 1]) "c"ontinue

// 		// `j` represents the "middle" element between `i` and `k`.
// 		// we will increment this up through the array while `i` and `k`
// 		// are anchored to their positions. we will decrement `k` for
// 		// for each pass through the array, and finally increment `i`
// 		// once `j` and `k` meet.
// 		let j = i + 1

// 		// `k` represents the "right" most element
// 		let k = nums.length - 1
		
// 		// to summarize our setup, we have `i` that starts at the beginning,
// 		// `k` that starts at the end, and `j` that races in between the two.
// 		//
// 		// note that `i` is controlled by our outer for-loop and will move the slowest.
// 		// in the meantime, `j` and `k` will take turns inching towards each other depending
// 		// on some logic we'll set up below. once they collide, `i` will be incremented up
// 		// and we'll repeat the process.

// 		while (j < k) {
// 			let sum = nums[i] + nums[j] + nums[k]

// 			// if we find the target sum, increment `j` and decrement `k` for
// 			// other potential combos where `i` is the anchor
// 			if (sum === target) {
// 				// store the valid threesum
// 				results.push([nums[i], nums[j], nums[k]])

// 				// this is important! we need to continue to increment `j` and decrement `k`
// 				// as long as those values are duplicated. in other words, we wanna skip values
// 				// we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
// 				// [[-2,0,2], [-2,0,2]].
// 				//
// 				// (i'm not a fan of this part because we're doing a while loop as we're
// 				// already inside of another while loop...)
// 				while (nums[j] === nums[j + 1]) j++
// 				while (nums[k] === nums[k - 1]) k--

// 				// finally, we need to actually move `j` forward and `k` backward to the
// 				// next unique elements. the previous while loops will not handle this.
// 				j++
// 				k--

// 			// if the sum is too small, increment `j` to get closer to the target
// 			} else if (sum < target) {
// 				j++

// 			// if the sum is too large, decrement `k` to get closer to the target
// 			} else { // (sum > target)
// 				k--
// 			}
// 		}
// 	}

// 	return results
// };

//____________________________________________practice___________________________________________________

// let nums = [-1,0,1,2,-1,-4]

// function threeSum (nums){
//      const result = []
//      if(nums.length <3){
//         return result
//      }
// nums=nums.sort((a,b) => a-b)
// let target =0
// for(let i=0;i<nums.length-2;i++){
//     if(nums[i]>target){
//         break
//     } if(i>0 && nums[i] == nums[i-1]){
//         continue
//     } let j=i+1
//        let k=nums.length-1

//        while(j<k){
//         let sum =  nums[i]+nums[j]+nums[k]
//         if(sum === target ){
//             result.push(nums[i],nums[j],nums[k])

//             while(nums[j]=== nums[j+1]) j++
//             while(nums[k] === nums[k-1]) k--
//             j++
//             k--

//         } else if(sum<target){
//             j++
//         } else{ k--
//         }
//     }
    
// } return result



// } console.log(threeSum (nums));


//___________________________________________1299. Replace Elements with Greatest Element on Right Side_______________

// Given an array arr, replace every element in that array with the greatest element among the elements 
// to its right, and replace the last element with -1.
// After doing so, return the array.
// Example 1:

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]

// let arr =  [17,18,5,4,6,1]
// function replaceEle (arr){

//     let currMax = arr[arr.length-1]   // bcz start from rightside

//     arr[arr.length-1] = -1   //want last ele is -1

//     for(let i = arr.length-2; i >= 0; i--){
//         let curr = arr[i]
//         arr[i] = currMax
//         if(curr > currMax){
//             currMax = curr
//         }
//     }
//     return arr
// } console.log(replaceEle (arr))


//____________________________________________392. Is Subsequence______________________________


// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true

//solution

// let s = "abc"
// let t = "ahbgdc"
// function subsequence(s,t){

//     let sPointer=0;
//     let tPointer=0;
//     while(sPointer<s.length && tPointer<t.length){   //s point and t point will less than s and  length
        
//         if(s[sPointer] == t[tPointer]){   //is s[0] and t[0] is equal
//             sPointer++; // then increse spoint for check other values
//             tPointer++;  // same
//         }else{
//             tPointer++; // if both not equal then increse t bcz t has greater length
//         }
//     } return sPointer == s.length  // is this line true or not this return return ans in true false
// } console.log(subsequence(s,t));



//_________________________________________jump game___________________________________________________


// You are given an integer array nums. You are initially positioned at the array's 
//  index, and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.
// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.


// let nums = [2,3,1,1,4]

//  function canJump (nums) {
//     let reach = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (i > reach)
//             return false;
//         reach = Math.max(reach, i + nums[i]);
       
//     }
//     return true

// } console.log(canJump (nums));

//_____________________________________________Check if strings are rotations of each other or not

// Given two strings s1 and s2. The task is to check if s2 is a rotated version of
//  the string s1. The characters in the strings are in lowercase.
// Example 1:

// Input:
// geeksforgeeks
// forgeeksgeeks
// Output: 


// let s1= "mathforgeeks"
// let s2="formathgeeks"

// function stringconitans (s1,s2){
// if(s1.length !== s2.length){
//     return false
// } 
// let s = s1+s1
// if(s.includes(s2)){
//     return true
// } return false

// } console.log(stringconitans (s1,s2));


//___________________________________________________215. Kth Largest Element in an Array______________________

// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// You must solve it in O(n) time complexity.

// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

//_solution (in sorted array)

// let nums = [3,2,1,5,6,4]
// let k= 2

// function largestEle(nums,k){
// let sortedNums= nums.sort((a,b) => a-b)
// let length = nums.length
//                                               //4
// return sortedNums[length-k]   // [1,2,3,4,5,6][6-2] =4 // 4 index value is 5
//                                     // ans =5
// } console.log( largestEle(nums,k));




// let arr = [7, 10, 4, 3, 20, 15]
// let k=4

// function smallestElement(arr,k){
//   arr.sort((a,b)  => a-b)
//   //[3,4,7,10,15,20]
//  return arr[k-1]

// }console.log(smallestElement(arr,k))





//___________________________________________Common elements_______________________________

// Given three arrays sorted in increasing order. Find the elements that are common in all three arrays.
// Note: can you take care of the duplicates without using any additional Data Structure?

// Example 1:
// Input:
// n1 = 6; A = {1, 5, 10, 20, 40, 80}
// n2 = 5; B = {6, 7, 20, 80, 100}
// n3 = 8; C = {3, 4, 15, 20, 30, 70, 80, 120}
// Output: 20 80
// Explanation: 20 and 80 are the only
// common elements in A, B and C.


// let n1 = 6; A = [1, 5, 10, 20, 40, 80]
// let n2 = 5; B = [6, 7, 20, 80, 100]
//  let n3 = 8; C = [3, 4, 15, 20, 30, 70, 80, 120]

//  function commonEle (A,B,C,n1,n2,n3){
//     let i=0,j=0,k=0
//     let set = new Set()
//     while(i<n1 && j<n2 && k<n3){
//         if(A[i] == B[j] && B[j] == C[k]){
//             set.add(A[i])
//             i++
//             j++
//             k++
//         } else if(A[i]< B[j]){
//             i++
//         } else if(B[j]< C[k]){
//             j++
//         } else{
//             k++
//         }
//     }
// let arr= Array.from(set)
//       return arr
//  } console.log(commonEle (A,B,C,n1,n2,n3));

    


// //___________________________________349. Intersection of Two Arrays__________________

// // Given two integer arrays nums1 and nums2, return an array of their intersection. Each 
// // element in the result must be unique and you may return the result in any order.

// // Example 1:

// // Input: nums1 = [1,2,2,1], nums2 = [2,2]
// // Output: [2]

//_____________solution 1 


// let  nums1 = [1,2,2,1], nums2 = [2,2]

// function intersetionEle(nums1,nums2){

//     let arr =[]
//     let map1 = new Set(nums1)
//     let map2 = new Set(nums2)

//     for(let i of map1){
//         if(map2.has(i)){
//             arr.push(i)
//         }
//     } return arr


// }console.log(intersetionEle(nums1,nums2));

//_________solution2

// let  nums1 = [1,2,2,1], nums2 = [2,2]

// function intersetionEle(nums1,nums2){

//     nums1.sort((a, b) => a - b) 
//     nums2.sort((a, b) => a - b) 

//     let res = []
//     let i = 0, j = 0;

//     while ((nums2[i] && nums1[j]) !== undefined) {

//        let left = nums1[j]
//        let right = nums2[i];

//         if (right === left) {
//             res.push(right)
//             while (left === nums1[j]) j++;
//             while (right === nums2[i]) i++;

//             continue;
//         }
        
//         if (right > left) while (left === nums1[j]){
//              j++
//         }

//          else{
//              while (right === nums2[i]) i++
//          }
//         }
//     return res;
// }console.log(intersetionEle(nums1,nums2));


   //_____________________________________________58. Length of Last Word______________________


//  Given a string s consisting of words and spaces, return the length of the last word in the string.
//  A word is a maximal substring consisting of non-space characters only.
//  Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

//let  s= "Hello World"


//__________1st sol 
// function lengthWord (s){
// var arr = s.split(' ');
// for(var i = arr.length - 1; i > 0; i--) {
//     if (!arr[i]) {
//         arr.pop();
//     } else {break;}
// }
// return arr[arr.length - 1].length;
// } console.log(lengthWord (s));


//___________4th solution_______(useful)

//let  s= "Hello World"
// function lengthWord (s){
// let len = 0;
// //loops from end to start (Backward Direction)
// for (let i = s.length - 1; i >= 0; i--) {
//     // if s[i] is a space && len is not 0 : returns len 
//     if (s[i] === ' ' && len )
//         return len;
//     //if s[i] is not space : increament the len 
//     if (s[i] != ' ')
//         len++;
// }
// return len;

// } console.log(lengthWord (s));


//_________________________________________________20. Valid Parentheses_________________________


// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Example 1:
// Input: s = "()"
// Output: true

// let s = "()"

// function isValid (s) {
//    var temp = [];
//    var map = {
//        '(' : ')',
//        '{' : '}',
//        '[' : ']'
//    };
//    for(var i = 0; i < s.length; i++){
//        if(s[i] === '(' || s[i] === '{' || s[i] === '[')
//            temp.push(s[i]);
//        else if(map[temp.pop()] !== s[i]){
//            return false;
//        }
//    }
//    if(temp.length > 0)          // here length id 0 so return true
//        return false;
//    else
//        return true;
// } console.log(isValid(s));


//*******************************************************Day 1************************************************************ */

//________________________________________^^^^^^^^^^ sum of two num^^^^^^^^^^________________________________________

// Write a program that, given an array A[] of n numbers and another number x, determines whether
// or not there exist two elements in A[] whose sum is exactly x. 

// Examples: 

// Input: arr[] = {0, -1, 2, -3, 1}
//         x= -2
// Output: Pair with a given sum -2 is (-3, 1)
//               Valid pair exists
// Explanation:  If we calculate the sum of the output,1 + (-3) = -2

// Input: arr[] = {1, -2, 1, 0, 5}
//        x = 0
// Output: No valid pair exists for 0

//solution--


// let arr = [0, -1, -1, -3, 1]
// function  twoNubOfSum (arr){
// let x= -2
// let sum =0
// let count =0
// for (i=0;i<arr.length;i++){

//     for (j=i+1;j<arr.length;j++){

//         if( arr[i]+arr[j] === x){

//          sum = arr[i]+arr[j]

//            console.log(arr[i],arr[j]);
//            count ++

//         }
//     } 
//     } 
//     console.log(count)
//     return ""
// } console.log(twoNubOfSum (arr));


//__________________________________________^^^^^^^^^^^multiple occurance in array^^^^^^^^^^^^^___________________

// Given an unsorted array with repetitions, the task is to group multiple occurrence of individual elements.
// The grouping should happen in a way that the order of first occurrences of all elements is maintained.

// Examples: 

// Input: arr[] = {5, 3, 5, 1, 3, 3}
// Output:        {5, 5, 3, 3, 3, 1}

// Input: arr[] = {4, 6, 9, 2, 3, 4, 9, 6, 10, 4}
// Output:        {4, 4, 4, 6, 6, 9, 9, 2, 3, 10}

//**______________1st approach

// let arr = [5,3,5,5, 1,3, 3]
//   let n = arr.length

// function maxOccurance (arr,n){

// let max= Array(n).fill(0)

//  for (let i=0;i<n;i++){
//      max[i] = false 
//     }
//     for(let i=0;i<n;i++){
//         if (!max[i]){

//          console.log( arr[i]+" ");

//         for (let j=i+1;j<n;j++) {

//         if (arr[i]=== arr[j]) {   //5

//         console.log(arr[i]+" ");
//         max[j] = true
//     }
// } 
// }
// } return ""

// }maxOccurance (arr,n)


//**_____________2nd approach

// function grouping(arr){
//   let map = {}

//   for(let i of arr){
//       map[i] = (map[i] +1) || 1
//   }

//   let arr1 = []

//   for(let i= 0; i<arr.length; i++){
//       let count = 0
//       if(map[arr[i]]){
//           count = map[arr[i]]
//       }
//       if(count !== 0){
//           for(let j =0; j<count; j++){
//               arr1.push(arr[i])
//           }
//           delete map[arr[i]]
//       }
//   }
//   return arr1
// }
// let arr = [5, 3, 5, 1, 3, 3]
// console.log(grouping(arr))


//*************************************************************Day 2*************************************************** */

//_____________________________________________^^^^ find duplicate key^^^^^^^^^^^^^^ ___________________

// Given an array of n elements that contains elements from 0 to n-1, with any of these numbers 
//appearing any number of times. Find these repeating numbers in O(n) and using only constant memory space.

// Example: 

// Input : n = 7 and array[] = {1, 2, 3, 6, 3, 6, 1}
// Output: 1, 3, 6

// Explanation: The numbers 1 , 3 and 6 appears more
// than once in the array.

// Input : n = 5 and array[] = {1, 2, 3, 4 ,3}
// Output: 3

// Explanation: The number 3 appears more than once
// in the array.

//solution=


//____________1st approch 
// let arr = [1, 2, 3, 6, 3,3, 6, 1]

// function duplicateKey (arr){

//   for(i=0;i<arr.length;i++){

//     for(j=i+1;j<arr.length;j++){
//       if(arr[i] == arr[j]){
//        console.log(arr[i],arr[j]);
//       } if(arr[i]==arr[j+1]){
//         console.log(arr[i],arr[j]);
//       }
//     } 
//   }
//   }  console.log(duplicateKey (arr));



//**___________2nd approach

// let arr = [1, 2, 6 ,3,3, 6, 1]     


// function DuplicateKey (arr) {

//   arr.sort((a,b) => a-b)  // use for sorting 10..bcz of this 10 comes at end

//   for(i=0;i<arr.length;i++){

//   if(arr[i] == arr[i+1]){

//     console.log(arr[i]);
//   }
// }
// }DuplicateKey(arr)

//**_______3rd approch by frequency counter

// let arr = [1, 2,2, 6 ,3, 3,3, 6, 1]    


// function DuplicateKey (arr) {
//   let arr1=[]
// let map = {}

// for( let i of arr){             // of for array
//   map[i]=(map[i]+1) || 1
// }

// for(let i in map){                  // in for map or object
//   if(map[i] >1){
//     arr1.push(i)
//   }
// } return arr1.join(" ")

// } console.log(DuplicateKey (arr))


//______________________________________________^^^^^^^^^^^remove duplicate elements^^^^^^^^^^______________________________



// Given a sorted array, the task is to remove the duplicate elements from the array.

// Examples: 

// Input  : arr[] = {2, 2, 2, 2, 2}
// Output : arr[] = {2}
//          new size = 1

// Input  : arr[] = {1, 2, 2, 3, 4, 4, 4, 5, 5}
// Output : arr[] = {1, 2, 3, 4, 5}
//          new size = 5

// }

//solution =                                              
//**_______1st approach
// let nums=[2, 2, 2, 2, 2]                              //(applicable on sorted array)

// function removeDuplicateKey (nums){

// for(i=0;i<nums.length;i++){
//   if(nums[i] != nums[i+1]){
// console.log(nums[i]);
//   }
// }

// }removeDuplicateKey (nums)

//**__________2nd approach

// let nums=[2, 2, 2, 2, 1,3]  
// function duplicates(nums){
//   let start = 0
//   let len = nums.length
// for (i=0;i<len;i++){
//   if (nums[i] != nums[i+1]){
//      nums[start] = nums[i]
//      console.log(nums[start]);       // for repeated number
//       start ++                    // for count
//   }
// }  return ""

// } console.log(duplicates(nums))


//______**3rd approach by frequency counter

// let arr=[2, 2,3, 2, 2, 2,1,1]                              //(applicable on sorted array)

// function removeDuplicateKey (nums){

//   let map = {}
//   let arr1 = []

//   for(let i of arr){

//    map[i]=map[i]+1 || 1

//   }
//   //console.log(map);
//   for(let i in map){
//     if(map[i]>1){
//     arr1.push(i)
//   }
//   } return arr1.join(" ")

// }console.log(removeDuplicateKey (arr))


//***************************************************************Day 3***************************************************** */

//_____________________________________________^^^^^^^^^^^^^find k th smallest element in array^^^^^^^^^^^^ ___________________________

//Given an array and a number K where K is smaller than the size of the array. 
//Find the K’th smallest element in the given array. Given that all array elements are distinct.

// Examples:  

// Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 3 
// Output: 7

// Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 4 
// Output: 10 

// // solution =

// //**1st approach

// let arr = [7, 10, 4, 3, 20, 15]
// let k=4

// function smallestElement(arr,k){
//   arr.sort((a,b)  => a-b)
//   //[3,4,7,10,15,20]
//  return arr[k-1]

// }console.log(smallestElement(arr,k))




//________________________________________________________^^^^^^^^^^^find missing element^^^^^^^________________________

// Given an array arr[] of size N-1 with integers in the range of [1, N], the task is to 
// find the missing number from the first N integers.

// Note: There are no duplicates in the list.

// Examples: 

// Input: arr[] = {1, 2, 4, 6, 3, 7, 8}, N = 8
// Output: 5
// Explanation: The missing number between 1 to 8 is 5


//solution = 
//**1st approach (not work)

// let arr = [1, 2, 4, 6, 3, 7, 8]
// let arr1 = []
// let start=arr[0]
// let n = arr.length-1
// function missingNumber(arr,n){
//   arr.sort((a,b) => a-b)

// for(i=0;i<n;i++){
//   if(!arr[i+1]){
//     console.log(arr[i+1]);
//     arr.push(arr1)
//   } if(arr[i+1] > n){
//      break
//   }


// }
// } missingNumber(arr)

//**2nd approach 

// let arr = [1,2,4,5, 6, 3, 8]
// let n = arr.length

// function missingNum (arr,n){
//   var temp = []
//   //temp = n+1
//   for (i=0;i<=n;i++){
//     temp[i]=0
//   }

//   for(i=0;i<n;i++){
//     temp[arr[i]-1] = 1
//   }

//   let ans = 0
//   for (i=0;i<=n;i++){
//     if(temp[i] == 0)
//     ans = i+1
//   } return ans


//     } console.log(missingNum (arr,n))



//_____________________________________________________3rd approach ( most useful)______________________________________

// let arr =[0,1,3,4,5,6,7,8]
// function missingNub (arr){
//    let n = Math.max(...arr)
//    let total = 0
//    let ans = 0
//    for(let i =0;i<arr.length;i++){
//       total += arr[i]
//    }

//    ans = (n*(n+1)/2)-total
//    return ans

// } console.log(missingNub(arr));



//**************************************************************Day 4************************************************ */

//___________________________________^^^^^^^^^^^^Longest Substring Without Repeating Characters (very imp)^^^^^^^^_______________________________

//Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

//solution =

// let s= "abcabcbb"  //has = get ,present hai ki nhi , add = set 
//                      // new set() => has , add   , set me frequency ni batata , set not is randome
//                      // new map () => get , set   , map me frequency batata hai , map is in order

// function longestSubString (s){

//    if(!s){
//       return 0
//    }
//    let S =0
//    let e =0
//    let max = 0

//    let ele = new Set()  // same as new map , empty objech {}
//    while(e<s.length){
//       if(!ele.has(s[e])) // S me e 0 hoga to add hoga a bad me e ++ hoga to a,b,c add hoga
//       {
//          ele.add(s[e])
//          e++
// //  if(max < ele.size){
//  //     max = ele.size
// //  }
//          max = Math.max(max,ele.size)
//       }else {
//          ele.delete(s[S])
//          S++
//       }
//    }return max

// } console.log( longestSubString (s));



//_____________________________________________practice_________________________________

// let s = "abcdeabcbb"

// function longestSubString(s){

//     if(!s){
//         return 0
//     }
//     let a = 0 // sab ele check krega aur store krega
//     let z = 0
//     let max =0

//     let ele = new Set()  // set alwys store unique element it act as empty object

//      while(z<s.length){
//     if(!ele.has(s[z])){  // if this element not allready present in set then set this element via add and for continuos checking use z++
//        ele.add(s[z])
//        z++
//        max = Math.max(max,ele.size)   // here chech ele size and which value is max substring that store in it

// //   if(max<s.length){ // we can also use this for find max value of string
// //     max=s.length
// //   }

//     } else {
//         ele.delete(s[a]) // if value allredy present then delete it and for continuw checking use a++
//         a++
//     }

//     }
//   return max


// } console.log(longestSubString(s));




//__________________________________________________^^^^^^^^ 209). Minimum Size Subarray Sum^^^^^^^^______________________

// Given an array of positive integers nums and a positive integer target, return the minimal length 
// of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target.
//  If there is no such subarray, return 0 instead.

//  Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

//solution=

// let a = [2,3,1,2,4,3]
//  let target = 7
// function subarr (a,target){
// let S = 0, sum = 0, res= Infinity 

// for (let l=0;l<a.length;l++){
//    sum += a[l]        // 6

//    while(sum >= target ){
//      const size = (l-S)+1    //(3 -0)+1 = 4
//       res = Math.min(res,size)  // (0,4) =4
//       sum -= a[S]              // 6-0 = 6  //sliding window concept got deleting starting element 1 by 1
//       S++               // 1
//  }

// }
// if(res === Infinity) return 0   //  res === Infinity ? 0 ; res
// return res



// } console.log(subarr (arr,target)); 


//*************************************************************Day 5************************************************** */
// ____________________________________^^^^^^^^^^^^^contains duplicate^^^^^^^^^^^^___________________________________

// Given an integer array nums and an integer k, return true if there are two distinct indices i and j 
// in the array such that nums[i] == nums[j] and abs(i - j) <= k.



// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true

// solution=>

// let nums = [1,1,1,2,3,1]
// let K = 3
// function containDuplicates (nums,k){
//    const map = new Map();

//    for (let i=0;i<nums.length;i++){
//       const value = nums[i]  
//       if(map.has(value)){    // jar ti value addhi present asel tarch hi if chi purn condition chalel
//          const j = map.get(value) // nahitr nahi chalnar aani 550 line chalun ti value set hoil map mdhye 
//          if(i-j<=k ){           // indeex value aani index value chi valuechi subtraction <= k asel tr return true hoil
//              return true
//          }
//       }
//      map.set(value ,i)   // jar value addhi present nsel tr ti value unique mhnun set hoil
//    }
//    return false
// } console.log(containDuplicates (nums,K));



// *************************************************************Day 6**************************************************** */

// ______________________________________________^^^^424). Longest Repeating Character Replacement^^^^^^^^^^______________

// You are given a string s and an integer k. You can choose any character of the string 
// and change it to any other uppercase English character. You can perform this operation at most k times.
// Return the length of the longest substring containing the same letter you can get after performing the above operations.
// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa

// solution =>

// **1st approach 


// let str = "ABAB"
// let k=2

//  function repeatingChar (str,k){
//    let map = {};
//    let start = 0;
//    let max = 0;

//    for (let i = 0; i < str.length; i++) {
//        let rightChar = str[i];

//        if (!(rightChar in map)) map[rightChar] = 0;
//        map[rightChar] += 1;

//        while((i - start + 1) - Math.max(...Object.values(map)) > k) {  // while (i<k) //()
//            let leftChar = str[start];
//            map[leftChar] -= 1;
//            start += 1;
//        }
//        max = Math.max(max, i - start + 1); // (0-0+1)=1,(1-1+)
//    }
//    return max;
// } console.log(repeatingChar (str,k));


//________________________________________________________38. Find All Anagrams in a String____________________________

// Given two strings s and p, return an array of all the start indices of p's anagrams in s. 
// You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or
//  phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".


//solution => (using sliding window) ____________-this approach also use for find most occuring character using count++
// and this aprroch mainly use for a to z characters que not for word

// frequency in character are same in both s and p
//length of s and p would be same
//eg. abc = bca,cab,acb
//s = "cbaebabacd" = cba,bae,aeb  delete 1st chara and add last one


// let s = "cbaebabacd", p = "abc"

// function allAnagram(s, p) {
//     //s=s.split(" ")
//     //let count = {}
//     // for(let i of s){
//     //    count[i] = (count[i]+1) || 1 


//     let result = []
//     if (p.length > s.length) return result // if plength is less than slength then it is not anagram return  result is empty array

//     // check frequency of alphabets

//     let sArr = new Array(26).fill(0) // fill 0 in the beginning
//     let pArr = new Array(26).fill(0)

//     for (let i = 0; i < p.length; i++) {
//         pArr[p.charCodeAt(i) - 97]++  // give index of each alphabets
//         sArr[s.charCodeAt(i) - 97]++ // fill the s array if that alphabet exist then simply increse it
//         // a= p.charCodeAt(i)-"a".charCodeAt(0) = a-a =charcode of a is 97 = 97 - 97 = 0 index
//         // b = 98-97 =1
//         // c=99 -97 =2
//     }
//     //traiversing array
//     for (let i = 0; i < s.length; i++) {
//         if (isAnagram(sArr, pArr)) {
//             result.push(i)
//         }

//         sArr[s.charCodeAt(i) - 97]--
//         sArr[s.charCodeAt(i + p.length) - 97]++
//     }

//     function isAnagram(sArr, pArr) {
//         for (let j = 0; j < 26; j++) {
//             if (sArr[j] != pArr[j]) {
//                 return false
//             }
//         } return true
//     } return result
// } console.log(allAnagram(s, p));


//__________________

let s = "cbaebabacd", p = "abc"

function allAnagram(s,p){
let result = []
if(p.length>s.length){
  return result
}
let sArr= new Array(26).fill(0)
let pArr= new Array(26).fill(0)

for(let i=0;i<p.length;i++){
  pArr[p.charCodeAt(i)-97]++
  sArr[s.charCodeAt(i)-97]++
}

for(let i=0;i<s.length;i++){
  if(isAnagram(sArr,pArr)){
    result.push(i)
  }
  sArr[s.charCodeAt(i)-97]--
  sArr[s.charCodeAt(i+p.length) -97]++
}

function isAnagram(sArr,pArr){
  for(let j=0;j<26;j++){
    if(sArr[j]!= pArr[j]){
      return false
    } 
  }  return true
} return result

} console.log(allAnagram(s, p));




















//_______________________________________________^^^ 643). Maximum Average Subarray^^^__________________________________

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and
//  return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:
// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

//solution =>

// let nums = [1,12,-5,-6,50,3]
// let k = 4

// function avgSubArr (nums,k){
// let arr = []
// let avgSum = 0
// let sum = 0
//     for(i=0;i<k;i++){
//         sum += nums[i]
//     }
//       avgSum = sum/k
//        arr.push(avgSum)

//     for (i=k;i<nums.length;i++){

//         sum += nums[i] - nums[i-k]
//         avgSum = sum/k
//         arr.push(avgSum)

//    return Math.max(...arr)
//     }

// } console.log(avgSubArr (nums,k));



//___________________________________________121. Best Time to Buy and Sell Stock_______________

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

//__________solution 1 => (my solution)

// let arr = [7, 1, 5, 3, 7, 4]  // here profit is 5 bcz buy at 1 and sell at 6

// function maxProfit(arr) {
//     let buy = arr[0]
//     arr[0] = 0

//     let profit = 0

//     for (let i = 1; i < arr.length; i++) {
//         if (buy > arr[i]) {
//             buy = arr[i]
//             arr[i] = 0
//         }
//         else {
//             profit = Math.max(arr[i] - buy, profit)
//         }

//     } return profit

// } console.log(maxProfit(arr));



//___________2nd approach
// let arr = [7,1,5,3,6,4]
// function maxProfit (arr){
// let min = Infinity
// let max =0
// for(let i=0 ;i<arr.length;i++){
//     if(min > arr[i]){
//         min = arr[i]
//     }
//     max = Math.max(arr[i] - min , max )
// }
// return max
// } console.log( maxProfit (arr));


//__________3rd way

// var maxProfit = function(arr) {
//     let min = Infinity
//     let max = 0
//     for(let i =0; i<arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i]
//         }
//         // min = Math.min(arr[i], min)
//         max = Math.max(arr[i] - min , max)
//     }
//     return max
// };
// let arr = [7,1,5,3,6,4]
// // Output: 5
// console.log(maxProfit(arr))




// //______________________________________567. Permutation in String (sliding window bcz we need to maintain the size of the window)_____________



// permutation means its also same as anagram means if you have 1st string angram in 2nd  string this is also called a permutation or same letter occure in 2nd string 
//ex= s1 = cab  s2 = bca  or s1 = cab   s2 = cab

/*  for s1 & s2 to be anagram
=> s1& s2 must be of equal length
=> s1& s2 must be having same frequency of all character of all corrosponding unique character
 
 
*/



// // Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// // In other words, return true if one of s1's permutations is the substring of s2.
// //  Example 1:
// // Input: s1 = "ab", s2 = "eidbaooo"
// // Output: true
// // Explanation: s2 contains one permutation of s1 ("ba").

// // solution

// need character bet a to z which 26
// then use two hasmap for s1 and s2 store element in both s1 and s2 and then compare it 
// if they are not equal then slide the window with deleting 1st element and  increse frequency count of repeating element and again math s1  hash with s2
// and jab window slide hogi to jo element delete ho rha hai vo agar store hoga pehle se to vo usme se bhi delete hoga


//_______________1st way 

//  var checkInclusion = function(s1, s2) {
//         if(s1.length > s2.length){
//             return false
//         }

//         let arr = new Array(26).fill(0)         // bcz letters are in between a to z  so all letter is 26

//         for(let i = 0; i<s1.length; i++){
//             arr[s1.charCodeAt(i) -97]++
//             arr[s2.charCodeAt(i) -97]--
//         }
//         if(arr.every(ele=> ele==0)){
//             return true
//         }
//         for(let i =s1.length; i<s2.length; i++){
//             arr[s2.charCodeAt(i) -97]--
//             arr[s2.charCodeAt(i - s1.length) - 97]++
//             if(arr.every(e=> e== 0)){
//                 return true
//             }
//         }
//         return false
//     }
//     let s1 = "ab"
//     let s2 = "eidbaooo"  // true
//     // let s2 = eidboaoo    // false
//     console.log(checkInclusion(s1,s2))


//_________2nd way

// let s1 = "ab"
// let s2 ="eidbaooo"

// function permutation (s1,s2){

//     vector s1hash



// } console.log(permutation (s1,s2));



//______________________________________1. two sum (using multipointer)___________________(not work in unsorted array)


//Given an array of integers nums and an integer target, return indices of the two numbers
// such that they add up to target.
// may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.
//Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].



//______1st approach (not work unsorted )

// let nums = [2,7,11,15]
// let target = 9

// function twoSum (nums, target) {
//     let i = 0
//     let j = nums.length-1

//     while (i<j){

//         if(nums[i] + nums[j] == target){

//             return [i,j]    // for return index value
//         }

//        if  (nums[i]+nums[j] > target){

//             j=j-1

//         }
//       else if (nums[i] + nums[j] < target){

//           i= i+1
//         }
// } return [i,j]

// } console.log(twoSum(nums, target));


//________________2nd approach

// function twoSum (nums, target) {
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){     // use i+1 for 2nd for loop

//         if (nums[i]+ nums[j] === target){
//                 return [i,j]
//             }
//         }
//     }
// }console.log( twoSum ([3,2,4],6));




//________________________________________347. Top K Frequent Elements____________________


//Given an integer array nums and an integer k, return the k most frequent elements. 
//You may return the answer in any order.
// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

//_________1st (not work properly)

// let nums = [1,1,1,2,2,3]
// let k = 2

// function mostFrequentEle (nums,k){

// let map = new Map()
// for(let i=0; i<nums.length; i++){
//     if(map.get(nums[i]) == undefined){
//         map.set(nums[i] , 1)
//     }
//     else {
//         map.set(nums[i],map.get(nums[i])+1)
//     }
// } console.log(map);

// for (let [key,value] of  map){
//     let maxFreq = 0
//     let ans = 1
//     if(value > maxFreq){
//          ans = key
//           maxFreq =   value
//     } return ans
// }


// } console.log(mostFrequentEle (nums,k));

//___________2nd approch

// let nums = [1,1,1,2,2,3]
// let k = 2

// function mostFrequentEle (nums,k){

//     let map = {}
//     let arr1 = []

//     for(let i of nums){
//         map[i] = (map[i]+1) || 1
//     } console.log(map);

//     let sorted = Object.entries(map).sort((a,b) =>{
//         return b[1] - a[1]
//     });

//     for ( let i=0;i<k;i++){
//         arr1.push(Number(sorted[i][0]))
//     } return arr1
//     }
//  console.log(mostFrequentEle (nums,k));


// __________________________________________217. Contains Duplicate_____________


// Given an integer array nums, return true if any value appears at least twice in the array,
//  and return false if every element is distinct.
// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

//_________approach (but not passes all test cases)
// let nums =  [1,1,1,3,3,4,3,2,4,2]

// function containDuplicates (nums) {
//     let map = {}
//     let max = 0
//     for(let i of nums){
//         map[i]= map[i]+1 || 0
//     } 
//     for(let i in map){
//         if(map[i] > max){
//             max = map[i]
//         return true
//     } if (map[i] < 1){
//         return false
//     } 
//     } return true

// }console.log(containDuplicates (nums) );

//_______approach 2_________(esy but not pasees all test cases)

// let nums =  [1,1,1,3,3,4,3,2,4,2]


// function cointainDuplicate(nums) {
//     let map = {}

//     for(let i of nums){
//         map[nums[i]]= map[nums[i]]+1 || 1

//         if(map[nums[i]]> 1){
//             return true

//           }   
//     } return false

// }console.log(cointainDuplicate(nums))



//_______approach 3_________(esy but not pasees all test cases)

// let nums = [1, 2, 3, 4, 4]

// function cointainDuplicate(nums) {
//     var map = {};

//     for (let i of nums) {

//         if (map[nums[i]] !== undefined) {
//             return true;
//         } else {
//             map[nums[i]] = i
//         }
//     } return false
// } console.log(cointainDuplicate(nums));



//___________approch 3 (it's works properly)

// let nums = [1, 2, 3, 4, 4]

// function containDuplicates (nums) {
//     let arr = [];
    
//     for (var i=0; i<nums.length; i++) {
//         if(!arr.includes(nums[i])){  // includes use for search elemrnts if element not found in arr [] then push it in arr []
//             arr.push(nums[i])
//         }
//     }
//     if(arr.length === nums.length) {
//         return false
//     }
//     return true

// }console.log( containDuplicates (nums));


//______________________________________________242. Valid Anagram_________________________________

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
//  using all the original letters exactly once.
// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true


//_____solution(this logic alwys use for two string)

// let s = "anagram"
// let t = "nagaram"

// function anagram(s, t) {
// if(s.length != t.length){
//     return false
// }
// let map ={}
// for(let i of s){
//     map[i] = map[i]+1 || 1
// }
// for(let j of t){
//     if(!map[j]){  // j mdhye value nsel tr hi if condition chalnar nahi
//         return false
//     }
//     else{
//         map[j] = map[j] -1 
//     }
// } return true

// } console.log(anagram(s, t));


//_____________________________________________________238. Product of Array Except Self________________

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// let nums = [1,2,3,4]

// function productExceptSelf(nums) {
//     var ans= [], left = 1, right = 1;       // is loop me 2 ans aayenge 24 and 12 bcz right me value 1 hai to vo pehle store hogi last index me array me
//     for (var i=nums.length - 1; i >= 0; i--) {   //right se nums [i] multiply kiya to left ki 2 value aayegi aur vo ans me store hogi
//         ans[i] = right;
//         right *= nums[i];
//     }
//     for (var j=0; j < nums.length; j++) {
//         ans[j] *= left                          // yaha hum multiply kr rhe hai to 1st 2 value 1 hogi  last 2 ka ans aayega 8 and 6
//         left *= nums[j];
//     }
//     return ans
// } console.log(productExceptSelf(nums));

//____________________________________________231. Power of Two_________________________________

// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.
// Example 1:Input: n = 1 Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16

//solution =>
// let n = 4
//  function isPowerOfTwo (n) {
//     if(n===1){                  // repeate all the below steps again and again still n becomes 1 then o/p will true if that is 2's power
//         return true
//     } else if( n <= 0){
//         return false
//     }
//     if(n%2 !== 0){
//         return false
//     } else {
//         return isPowerOfTwo(Math.floor(n/2))
//     }
    
//     }console.log(isPowerOfTwo(n));



//__________________________________________509. Fibonacci Number(this solution is applicable for all exaple)__________________________________

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
// such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).
// Example 1:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

//solution =>

//fibo(n) = fibo(n-1)+ fibo (n-2)

//_____________solution 1

// function fibo(N){
// if(N<=2){
//     return 1
// } return fibo (N-1)+ fibo (N-2)
// } console.log(fibo(4));                 //F(2) = F(1) + F(0) = 1 + 0 = 1.
//                                          // F(3) = F(2) + F(1) = 1 + 1 = 2.
//                                         //F(4) = F(3) + F(2) = 2 + 1 = 3.




//________solution 2


// function fibo(N){
//     if  (N === 0 || N === 1) {
 //  return N;
  
//} return fibo (N-1)+ fibo (N-2)
//  console.log(fibo(4));  



//___________________________________________1969. Minimum Non-Zero Product of the Array Elements



// You are given a positive integer p. Consider an array nums (1-indexed) that consists of the
//  integers in the inclusive range [1, 2p - 1] in their binary representations. 
// You are allowed to do the following operation any number of times:
// Example 1:

// Input: p = 1
// Output: 1
// Explanation: nums = [1].
// There is only one element, so the product equals that element.




// const powmod = (a, b, mod) => {
//      let r = 1n; 
//      while (b > 0n) { 
//         if (b % 2n == 1){ 
//             r = r * a % mod; b >>= 1n; a = a * a % mod;
//         }
//      } return r;
//      };

// const ll = BigInt;
// const mod = ll(1e9 + 7);
// const minNonZeroProduct = (p) => {
//     p = ll(p);
//     return (powmod((1n << p) - 2n, (1n << p - 1n) - 1n, mod) * ((1n << p) - 1n)) % mod;
// };


//_______________________________58. Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.
// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// let s = " luffy is still joyboy"
// //o/p = 5 = world
// function lengthOfLastWord (s){
//   let arr = s.split(" ")
// for (let i = arr.length-1;i>0; i--){
//   if(!arr[i]){
//     continue
//   } 
//   else{
//     break
//   }
// }
// return arr[arr.length-1].length

// } console.log(lengthOfLastWord (s));



//_____________________________hackerrank________-------
//___________________________________________________^^^^^^^^^^^birthday candles count (hacker rank)^^^^^^^^^^6___________
// let candles = [3,1,2,3]

// function birthdayCaseCandles(candles){

//     let count = 0;

//     let Max= Math.max(...candles)
// for ( let i=0;i<candles.length;i++) {

//     if(candles [i] == Max) {
//         count ++
//     }
// } return Max

// }
// console.log(birthdayCaseCandles(candles))




//___________________________________________________________^^^^^^^^^^max min sum (hackerrank)^^^^^^^^6____________________
// let arr = [1,2,3,4,5] //max =5 , min=1


// function MaxMinSum(arr){
//     let sum=0
//     let max=arr[0] //1
//     let min=arr[0]  //1

//     for(i=0;i<arr.length;i++){
        
//         if(max<arr[i]){
//             max = arr[i]    // 5
//         }
//         if (min>arr[i]){
//             min = arr[i]   //1
//         }

//         sum+=arr[i]  //15

//         maxSum= sum-min //15-1 = 14 max sum
//         minSum = sum-max //15-5 = 10 min sum
//     }


//     console.log(maxSum,minSum);
    

// } MaxMinSum(arr)


//____________________________________technical suneja_________

//________________1).checking pair of sum is zero ___________
//input = [-5,-4,-3,-2,0,2,4,6,8] 
// output = [-4,4]


//let arr= [-5,-4,-3,-2,0,2,4,6,8]   //print array

// function PairSumZero (arr){
//     for(let number of arr){

//         console.log(number);
//     }
// }  PairSumZero([-5,-4,-3,-2,0,2,4,6,8])

//_______________pair of sum with high time complexity qudratic o(n^2)_____

/*function getSumPairZero (arr){
    for(let i=0;i<arr.length;i++){
        console.log("outer loop");
        for( let j=1;j<arr.length;j++){
            console.log("inner loop");
            if(arr[i] +arr[j] ===0 ){
                return [arr[i],arr[j]]
            }
        }
    }
} 
const result=getSumPairZero ([-5,-4,-3,-2,0,2,4,6,8])
console.log(result);*/

// //___________________with low time complexity which is linear_____
//                      //use loop once only for low time (linear) use while loop
// function findSumPair (arr){  
//     let left = 0
//     let right = arr.length-1

//     while(left<right){  // (sorted array me hamesha work krega ye approch array sorted nhi hua to sort krna hoga)
//     sum= arr[left]+arr[right]
//     if(sum === 0){
//     return [arr[left],arr[right]]

// } else if(sum>0){
//     right--

// }else {
//     left++
// }
// }
// }
// const result=findSumPair ([-5,-4,-3,-2,0,2,4,6,8])
// console.log(result)

// //time complexity is o(n) bcz ak hi time chalega loop


//__________________________________________anagram (string)___________________
//anagraM means length is same and letters present in same quantity
// if not nested loop are used and seperate loops are used then time complexity is linear not quadratic which is o(n)

//  let str1 = "hello"
// let str2 = "lloooeh"

// function isAnagram(str1, str2) {
 
//     let len1 = str1.length
//     let len2 = str2.length
 
//     let count = {}
//     for (let i = 0; i < len1; i++) {
//         count[i] = (count[i] || 0) + 1
//     }
//     for (let j = 0; j < len2; j++) {
//         if (!count[j] && (len1 != len2)) {
//             return "not a Anagram"
//         }
//         count[j] = -1
//     }
 
//     return "it is a Anagram"
// }
// console.log(isAnagram("hello", "lloeh"))

//________________________________________________________check unique nub (sorted array_____________________________
// let arr=[1,1,2,2,3,4,4,5,6,7,8,8]

// function checkUnique (arr){
//     if(arr.length>0){                   // array ki length check karenge
//         let i=0
    
//     for(let j=1;j<arr.length;j++){      
//         if [arr[i] ]!== [arr[j]]{
//             i++
//             arr[i]=arr[j]
//         }
//     } i+1
// }else {
//     throw new Error("array is empty")
// }
// }

////______________________________________________________

//______________simplify the array____convert it into 2D to 1D array_

// let arr=  [1, [2, 3], 2, [55, 2, [0, 3],3], [2, 3, [4, 5], 6, 1], 4, 5];
// function flatternArr (arr){
//     let flat = []
//     for (var i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i]) == false){
//             flat.push (arr[i])
        
//         }else {flat=flat.concat(flatternArr (arr[i]))}
//     }return flat
// }flatternArr ([1, [2, 3], 2, [55, 2, [0, 3],3], [2, 3, [4, 5], 6, 1], 4, 5])


//____________________FIND THE 2ND HIGHEST NUMBER______________

// let arr = [8,12,44,34,55,-11,0,-97,4,11,22,66,65,33,4];

// function highestNub (arr){
//     let max = arr[0]
//     for (let i=0;i<arr.length;i++){
//         if(max < arr[i]){ // (8<8),(8<12),(12<44) max =0 hai but vo compare krega aur bad me arr[i ]ki valu max me store hote jayegi jab 66 store hogi to vo highest valu hogi
//             max = arr[i] //12=44,44=34
//         }
//     } console.log(max);
// }highestNub(arr)

//__________________________find 2nd highest nub_______________

//  let arr = [8,12,44,34,55,-11,0,-97,4,11,22,66,65,33,4];

// function highestNub (arr){
//     let max = arr[0]
//     let secHig = 0
//     //let thirdHig = 0
//     for (let i=0;i<arr.length;i++){
//         if(max < arr[i]){ // (8<8),(8<12),(12<44) max =0 hai but vo compare krega aur bad me arr[i ]ki valu max me store hote jayegi jab 66 store hogi to vo highest valu hogi
//             max = arr[i] //12=44,44=34
            
//  }
//         else if(secHig< arr[i]){
//             secHig=arr[i]
//              }
//     } console.log(secHig);
// }highestNub(arr)

//___________________2nd approach______________
// let arr = [1,2,3,4,5]
// let k =2
// for(let i=0 ;i<k;i++){
//     let res = arr.pop()
//     arr.unshift(res)
// } console.log(arr);
//_____________________________________________rotate arr by k (right to left)|_______________________
// let arr = [1,2,3,4,5,6]  
// let k = 3  
// function rotateArr (arr,k) {

//     for (let i=0;i<k;i++){
//         let temp= arr[0]
//         for( j=0;j<arr.length;j++){
//             arr[j]=arr[j+1]
//         }arr[arr.length-1]=temp     // arr[6] = temp ..means last ki index aayegi ar me
//     }console.log(arr);
//         } rotateArr (arr,k) 

//________________________________rotate arr by k left to right________________



//___________bubblesort(ascending)_____________________
// let arr =[9,12,15,1,2,7,3]  
// n= arr.length
// function sort(arr,n){

//     for(i=0;i<n;i++){
//         for(j=0;j<n;j++){

//        if(arr[j]>arr[j+1]){
        
//         arr[j]=arr[j]+arr[j+1]
//         arr[j+1]=arr[j]-arr[j+1]
//         arr[j]=arr[j]-arr[j+1]
//        }
//     }
// }
// return arr
// } console.log(sort(arr,n));

//______________________________ Bubble sort descending______________

// let arr =[9,12,15,1,2,7,3] 
// n= arr.length
// function sort(arr,n){

//     for(i=0;i<n;i++){
//         for(j=0;j<n;j++){

//        if(arr[j]<arr[j+1]){
        
//         arr[j]=arr[j]+arr[j+1]
//         arr[j+1]=arr[j]-arr[j+1]
//         arr[j]=arr[j]-arr[j+1]
//        }
//     }
// }
// return arr
// } console.log(sort(arr,n));

//________________________________frequency counting hashmap_____________
/*   You need to create a javascript function which will accept a string and count the frequency of each alphabets. then print them in descending order like below -
a: 20
k: 9
d: 4
l: 3
g: 1 */
 
// let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

// function hashMap (str){
//     let map = new Map()
//     for (i=0;i<str.length;i++){
//         if(map.get(str[i] )== undefined){
//             map.set(str[i],1)
//         }
//         else{
//             map.set(str[i],map.get(str[i])+1)
//         }

//     } console.log(map);
// }hashMap (str)


//_______________pointers____________
























//______________________________________merge sort________________
// function merge(left, right) {
//     let i = 0
//     let j = 0
//     let res = []
//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             res.push(left[i])
//             i++
//         }
//         else {
//             res.push(right[j])
//             j++
//         }
//     }
//     while (i < left.length) {
//         res.push(left[i])
//         i++
//     }
//     while (j < right.length) {
//         res.push(right[j])
//         j++
//     }
//     return res
// }
// function mergeSort(arr) {
//     if (arr.length <= 1) {
//         return arr
//     }
//     let mid = Math.floor((arr.length) / 2)
//     let left = mergeSort(arr.slice(0, mid))
//     let right = mergeSort(arr.slice(mid))
//     return merge(left, right)
// }

//_____________________________________________codezinger dsa______________

//__________________________________________________________^^^^1)29 july^^^^^^^________________________________________


// Given a string S, find the difficulty of the given string. Here a Word is considered hard if it has 4
// consecutive consonants or number of consonants is more than the number of vowels. Else word is easy.
 // Difficulty of the string is defined as 5*(number of hard words) + 3*(number of easy words).
// Input:
//  Difficulty of sentence
//  where:
// First line represents input string S.
//  Output: 13
// Explanation:
// Hard words = 2(Difficulty and sentence) Easy words = 1(of) So, answer is 5*2+3*1 = 13

//solution => 













//____________________________________________________________________________


// let arr = [2, 1, 5, 2, 5, 5, 3]

// let count = 0
// let ele
// for (i =0; i<arr.length; i++) {

//     let count1 = 0
//     for (j=0; j<arr.length; j++) {

//         if (arr[i] == arr[j]) {

//             count1 = count1+1
            
//         }
       
       
//     }

//     if (count1 > count) {
//         count = count1
//         ele= arr[i]
//     }
// }
// console.log(ele +" is repeating", count+" times");

// let arr = [8, 9, 1, 8, 9, 7, 8]
 
// let count= 0//kaunsa element sabse zyada repeat hua h
// let ele
// for (i = 0; i < arr.length; i++) {
 
//     let count1 = 0//no of frequency
 
//     for (j = 0; j < arr.length; j++) {
 
//         if (arr[i] == arr[j]) {
 
//             count1 = count1 + 1    //3,2
 
//         }
 
//     }
 
//     if (count1 > count) {   //count1=3,count=0     3>0, 1>3
//         count = count1
 
//          ele=arr[i]                   //count 3      
 
//     }
// }
 
//  console.log(ele+" is repeating",count+" times");


//____________________________________frequent character (only for frequency count)______________________
// Second most frequent character
// Given a string S, Find the second most frequent character in S.

 

// Input:

//     aaabbcccc

 

//     where:

// First line represents input string S
 

// Output:

//     a

//solution ==

// let string = "aaabbcccc";

// let mp = new Map();  // hasmap o/p is map {}

// for(let i=0;i<string.length;i++){
//     if(mp.get(string[i])){ // yaha hum string value lete hai match krne ke liye present hai ki nhi
//         mp.set(string[i], mp.get(string[i])+1)  // yaha match krte hai agar value match huyi means repeat huyi to ye condition chalegi aur ye value ko increse karega
//     }
//     else{
//         (mp.set(string[i],1)) //and value repeat nasli tar hi condition chalellll aani print 1 karel value akdach present aslyamule
//     }
// }

// console.log(mp);
//__________________
//output = Map(3) { 'a' => 3, 'b' => 2, 'c' => 4 }  // hash map ch o/p he yeil object key value pair mdhye

//___________________________________count frequency with ( Second most frequent character)

// let str = "aaabbcccc"

// function secondMostFreq (str){
//     let map = {}

//     for (let i=0; i<str.length; i++)
//         map[str[i]] = (map[str[i]] || 0)+1 // jar repeated asla tr kiva nsla tr 0 asla tr + 1 krel



//         let fre=Object.keys(map).map(ele=>[ele,map[ele]])
//         fre.sort((a,b) => b[1] -a[1])   // sort krtoy dedcending to ascending

//         return fre[1][0]    // hi 2d array mdhali a chi index value aahe [0,1,2,3,4,5]
//                                                                         //[0,1,2,3,5]
        

    
// }console.log(secondMostFreq(str));

//_________________________________________________
/*Given a string S, Check whether it is possible to split a string from the middle which will give two halves having the same characters and same frequency of each character. If the length of the given string is ODD then ignore the middle element and check for the rest.

Input: abcbac
 where:
First line represents input string S
 Output: Yes
Explanation: The two halves contain the same characters with the same frequency.
Input:abcaabbc
Output: No
Explanation: The two halves contain the same characters but the frequency is not the same.
Assumptions:Character comparisons will be case-sensitive.
If the length of the given string is ODD then ignore the middle element. */

//solution ==

// let a = " abcbac"

// function solution(a) {
   
//  let mid = Math.floor(a.length/2)
//     let left = a.slice(0,mid).sort()
//     let right = a.slice(mid).sort()
//     for(let i=0;i<mid;i++){
//         if(left[i] != right[i]){
//         return "No"
//     }
//     }
//     return "Yes";
// }


// function main() {
//     var a = readLine().split("");

//     var res = solution(a);
//     console.log(res);
// }

