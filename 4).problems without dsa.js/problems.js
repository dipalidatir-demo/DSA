//________________________odd nub using while loop______________________

// let i =0
// while(i<100){
//     i+=1
//     console.log(i++);
// }




//___________________________________________________________________1)^^^^^palindrome^^^^^^^^________________________
// let arr = [1,2,3,4]
// let arr1 =[17,18,...arr]
// // for(i=0;i<arr.length;i++){

//solution -
// let a = "nikita"
// let b = a.split("").reverse().join('')
// if(a==b){
//     console.log("it is palindrome");
// }
// else {
//      console.log("not a palindrome")
// }

//_____________________________________________________________2)^^^^^^^^^^palindrome string,number^^^^^^^^^^ __________

//let num = 123


//(for convert nub into string ===== let str= (String(num)))
//(for convert nub into array ====== let array = Array.(num))

// function palindrome (str){

//     let reverseArr = str.split("").reverse().join("")
//     if(str == reverseArr){
//         console.log(true);
//     } else console.log(false);
// }
// palindrome("121")

//_____________________________________________________________3)^^^^^^^^^palindrome(2nd approach)^^^^^^^^^^^___________

// let str ="dad"
// //let num = "123"
// //let str =String(num)    // for number
// function palindrome (str){
//     for(let i=0;i<str.length/2;i++){
//         if(str[i] == str[str.length -1 -i]){ //str[5 -1 -0]= 4
//             console.log(true);               //str[str.length is 5-1 = 4 means last index milega aur uski value r hogi aise usme se i ki value minus hoti jayegi stating se]
//             break;
//         }else {
//             console.log(false);
//             break
//         }
//     }
// } palindrome(str)



//____________________________________________________________1)^^^^^^^^^^duplicate key^^^^^^^^^^^^^^^^_________________________________
 

// let arr = [1, 1, 2, 2, 3, 4, 5, 1];


// function duplicate(arr){
// for (i=0; i<arr.length; i++) {

//     for (j=i+1; j<arr.length; j++) {

//         if (arr[i] == arr[j]) {

//             console.log(arr[i])
//         }
//     }

//     }
// }console.log(duplicate(arr))

//________________________________________________________2)^^^^^^^^^^^2nd approch^^^^^^^^^^^^^^^^^________________________________

// let arr =[1,2,3,3,4,5,2,5,6,7]

// arr.sort()

// for(i=0; i<arr.length ; i++){

// if (arr[i] == arr[i+1]){

//     console.log(arr[i]);
// }

//    }

//______________________________________________3)^^^^^^^^^^^^^^^^3rd approach for removing duplicate key^^^^^______________

// let arr = [1,2,3,4,4,5,6,1,7,8,9,7,10]


// function removeDuplicateKey (arr){

//     arr.sort((a,b) => a-b)  // use for sorting 10..bcz of this 10 comes at end

//     for(i=0;i<arr.length;i++){

//     if(arr[i] == arr[i+1]){

//         console.log(arr[i]);
//     }
//     }
// }removeDuplicateKey(arr)

//__________________________________________________________4)^^^^^^^^^^^^^^duplicate key^^^^^^^^^^^^^_____________________________
// nums = [1,3,2,2,2]
// function duplicate (nums){
//     for (i=0;i<nums.length;i++){
//         for (j=i+1;j<nums.length;j++){
//             if(nums[i] == nums[j]){
//                 return nums[i],nums[j]
//             }
//         }
//     } return true
// } console.log(duplicate(nums));




//______________________________________________________^^^^^^frequency of string^^^^^^^^^________________________
// let str = "njdkfnsgggggjkn"


// function MaxRepeated (str){

// let count =0

// for(i=0;i<str.length;i++){
//     let max=0
//  for(j=0;j<str.length;j++){
    
//         if(str[i] == str[j]){

//         max++  // for incerese value

//         }if(max>count){    // use for update value of count
//             count=max
//         }
        
//     }
//     }

//     return count
// }
//  console.log(MaxRepeated( str))

//________________________________________________________^^^^^^^^^^prime number^^^^^^^^^^^_____________________________



// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// arr= arr.filter(x=>{  //arrow function used here not used index value  only use x value 

// for(j=2; j<arr.length ; j++){ // here we take j=2 for all loop
    
//     if(x==1){   //for not print 1
//         return false
//     }
//     if( x%2 == 0){   //2%2 == 0 then false
//         return false

//     }
//     return true  //2%2 !==0 then true

// }
// })

//  console.log(arr);



//_____________________________________________________^^^^^^^^^^sum of numbers(integer)^^^^^^^^__________________________________________
// let num = 12345

// function sumOf(num){
//   var sum = 0;
//   while (num != 0) {    // 0 honetak loop chalega
//       sum = sum + num % 10;    // =0+ (12345%10) = reminder = 5 , 5+(1234%10) = R=4 , //(5+4 =9) 9+(123%10) = R=3 , //5+4+3= 12  12+(12%10) = R=2 , //5+4+3+2 = 14  14+(1%10)=1.0  //5+4+3+2+1 = 15   15+(1%10)=0.1 yaha 0 aaya hai to loop ruk jayega
//       num = parseInt(num / 10);  
//   }
//   return sum;
// }console.log(sumOf(num));


//_________________________________________________________^^^^^^find max number in array^^^^^^^^________________

// let arr = [2,3,4,11,22,320]

// let max=0
// for(let i in arr){
//     let largestEle = arr[i]
//     if(max<largestEle ){
//         max= largestEle
//     }
// }
// console.log(max);

// o/ p is 320


//_______________________________________________________________^^^^^^print star^^^^^^^^^^^__________________

// let n =6
// for (i =1; i<=n ; i++){
//    // for (j=1; j<=i ; j++){

//        // process.stdout.write("*");
//        console.log("*".repeat(i));
//     }
//     //console.log("");
//   //console.log("<br/>");



//________________________________________________________________^^^^^^^^^array addition^^^^^^^^^^^^__________

// let arr=[1,3,6,7,8]

// let sum=0

// for(i=0;i<arr.length;i++){
//     sum=sum+arr[i]
// }
// console.log(sum)

//______________________________________________^^^^^^^^^^^^even nub^^^^^^^^^^^^^^________________
// let arr=[2,6,4,3,7];



// for(i=0;i<arr.length;i++){

//     if(arr[i]%2 ==0){
//     console.log(arr[i] +" "+"is even nub")
//     }else{
//         console.log(arr[i]+" "+"is odd nub")
//     }
// } 


//____________________________________________________________^^^^^^^^^max sum of subarray^^^^^^^^^_______________________________



//*********************my code without function */




//   _____________________________^^^^^^^^code with function^^^^^^^^^^^^_____________________________________

// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// function SumOfSubArr(arr) {
//     let max = 0

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {

//             let sum = arr[i] + arr[j]

//             if (i != j) {
//                 if (max < sum) {
//                     max = sum
//                 }
//             }
//         }
//     }//    return max;
//     console.log(max);
// }SumOfSubArr(arr)
// //SumOfSubArr(arr)

//________________________________________________________^^^^^^^^^^^^^ frequency counting^^^^^^^^^^^________________________________


// let arr = [99,3,4,5,99,9,99,11,99]   
 
// function freq (arr){
//     let count = 0
//     for (let i=0;i<arr.length;i++){
//     for(let j=0 ; j<arr.length;j++){
//         if(arr[i] == arr[j]){
//             return (arr[i]+" repeating 4 times");
//             //count ++
// }
// }//return count
//     } 
// } console.log( freq (arr));


//_______________________________________________________^^^^^^^^^^^^^sliding window^^^^^^^^^^^^_____________________


// let arr=[1,3,2,3,-3,5,3,7]

// let w=3
// let n= arr.length

// function sWindow (arr,n){
// for(i=0;i<n+w;i++){
//     console.log(arr[i]);
//     for(j=i+1;j<w;j++){
//         console.log(arr[j]);

//     }
// } return ""

// } console.log(sWindow (arr,n));


//___________________________________________________________^^^^^^^^matrix^^^^^^^^^^^^___________________________




// let a = [[1,2,3],[5,6,4],[7,2,1]]

//      // index=0  index=1  index=2

// function matrix (a){
// //  console.log(matrix[0]); //acess 1st item
// //  console.log(matrix[0][0]); //acess inner item 1st inner array 0 row 0 column
// //  console.log(matrix[0][0]); // acess the third inner array -

//  for(i=1;i<a.length; i++){

// for(j=0;j<a.length;j++){

//  for(k=0;k<a.length;k++){

//  }
// }
// }
// matrix()

//     // console.log([i])

// }
// console.log(matrix(a))

//_________________________________________^^^^^^^^^^^^^^prime Number^^^^^^^^^^^_______________________________________________________________





// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// arr= arr.filter(x=>{  //arrow function used here not used index value  only use x value 

// for(j=2; j<arr.length ; j++){ // here we take j=2 for all loop
    
//     if(x==1){   //for not print 1
//         return false
//     }
//     if( x%2 == 0){   //2%2 == 0 then false
//         return false

//     }
//     return true  //2%2 !==0 then true

// }
// })

//  console.log(arr);

//__________________________________________________^^^^^^^^^^^^print Natural num and add^^^^^^^^^^^____________________________
// let a=10;

// let sum=0
// for(i=0;i<=10;i++){
//     sum = sum+i
// }console.log(sum)


//_____________________________________________________________^^^^^^^print odd num^^^^^^^^^^__________________________
// let a=50;

// for(i=1;i<a;i=i+2){  //if we take 0 here then print all even num and if we take 1 here then print odd num here 
//                       // this is happned only if we take num in alphabet like let a=50 not in array
//     (console.log(i+"this is odd number"))
// }


//____________________________________________________^^^^^^^^rotate array by k side (left to right)^^^^^^^^_____________________________
// let arr = [1,2,3,4,5,6]

//  function rotateAnArr(arr,d){   //d is the value from where you want to rotate
//     for(let i=0;i<d;i++){

//         let fst = arr[0] //first 0 kiya kyonki hame left me rotate krna hai
//         for(j=0;j<arr.length;j++){

//             arr[j]= arr[j+1] //2nd element
//         }
//         arr[arr.length-1] = fst //last element is first

//     }for(k=0;k<arr.length;k++){  //for reprint array

//         console.log(arr[k]); //return single element
//     } 

//  }

// rotateAnArr(arr,4)


//__________________________________________________________^^^^^^^^^search or insert element in array^^^^^^^^__________________




// let arr = [7,5,3,29] // we want to insert value in array  in specific position
// let position = 3  // insert value in index 3 
// let newEle = 45  //this value we want to insert
// for( let i=arr.length-1; i>0 ;i--){   // for checking all value from reverse
//     if(i>=position){    //(3>=3)
//         arr[i+1]=arr[i]  //arr[3+1] = arr[3] =4 position // position is 3 but value add in 4
//         if(i==position){    //(4==3)
//             arr[i]= newEle   //3=45
//         }
//     }
// }                               // value add in position 4
// console.log(arr);



//____________________________________________________^^^^^^^^^^^^square of natural numbers^^^^^^^___________________________


// let arr = [1,2,3,4,5,6,7,8,9,10]
// len= arr.length
// function squareOfNub (arr)  {
//     let square =0
// for (i=0;i<len;i++){
//      square = arr[i]*arr[i]
//     if( square !=0){
//         console.log(arr[i] +" square is" +" " + square );
//     }
// } console.log("");

// }squareOfNub (arr)


//__________________________________________________________^^^^^^^^^cube of natural numbers^^^^^^^^_________________________

// let arr = [ 1,2,3,4,5,6,7,8,9,10]
// len = arr.length
// function cubeOfNub ( arr){
// let cube = 0
// for (i=0;i<len;i++){
//     cube = arr[i]*arr[i]*arr[i]
//         if( cube !=0){
//             console.log(arr[i]+" cube is "+" "+cube);
//         }
    
//     }return cube
// } console.log(cubeOfNub( arr));


//_______________________________________________^^^^^^^^calculate sum of first n odd natural numbers^^^^^^^^ ______________

//   let arr= [1,2,3,4,5,6,7,8,9,10]
//   len = arr.length
//   function sumOfOdd (arr){
//     let oddNub = 0
//     let sum =0
//     for(i=0;i<len;i++){
//        if(oddNub=(arr[i]%2 != 0)){
//        // console.log(arr[i]);
//         sum=sum+arr[i]
//        }
           
//     }return sum
//   }console.log(sumOfOdd (arr));


//______________________________________________________________^^^^^^^^^^^count number^^^^^^^^^________________

// let arr = [2,5,8,3,4,6,7,9,4,5,4,5,6,7]
// function cubeOfNub (arr){
// let count = 0
// let len = arr.length
// for(i=0;i<len;i++){
//     if(arr[i] !=0){
//         // console.log(arr[i]);

//         count++
//     } 
// }return count
// }console.log(cubeOfNub (arr));



//____________________________________________________________^^^^^^^^^^^addNum^^^^^^^^^^^^_____________________



// let a=2;
//  let b=3;

//  let add;
//  add=a+b;
//  console.log(add)




//________________________________________________________________^^^^^^^^^^reverse a Number^^^^^^^^^^^6_________________________
// let arr = [2,5,7,8,4,6,8,8] 
// function reverseNumb (arr){
//     let len=arr.length
//     let rev =0

//     for(i=len-1;i>=0;i--){

//         rev = arr[i]

//        console.log(rev);


//     }return ""

// }console.log( reverseNumb (arr));



//____________________________________________^^^^^^^^^^^find max value in array^^^^^^^^^_______________________



// /*Given an array arr[] of size N, the task is to find the maximum possible sum of i*arr[i] when the array can be rotated any number of times.
// Output: 72.We can get 72 by rotating array twice.
// {2, 10, 1, 20}
// 20*3 + 1*2 + 10*1 + 2*0 = 72
// */

let arr= [1,20,2,10] //o/p=72 by rotating array twice
let n = arr.length        // total value is n=4
function maxSum (arr){
let sum =0;

let currVal=0;

for(let i=0 ; i<n; i++){

    sum = sum+arr[i]; // sum of all sum = 33
    currVal = currVal+(i*arr[i]);  // 0+(index nub * indexvalue) = 0+(0*1) =0

}
let maxVal = currVal;  // max val = 0

for(let j=1; j<n ; j++){      // j=1 = 20

    currVal = currVal+sum - n*arr[n-j];   //= 0+33 - 4* arr[4- index of j] = 33 - 4*20= 33 - 80 =69 // curr val =69

    if(currVal > maxVal)  //(69>40)
    maxVal=currVal // max val = 69
}
return maxVal;    
}console.log(maxSum(arr));


//_________________________________________________________^^^^^^^^^^find number in array^^^^^^^^^________________________

// let arr =[0,3,6,9,1]
// let m=10;

// for (i=0;i<arr.length;i++){
//     if(arr[i]== m){
//         console.log("yes")
//     }
// else{
//     console.log("no");
// }
// }



//_____________________________________________________^^^^^^^^^^^^^^find subsequence of sum 3^^^^^^^^^________________________


// // input: arr[]={5, 5, 100, 10, 5}
// // output : 110
// // explanation:pick the subsequence {5,100,5}

// // the sum is 110 and no two Element are adjucent.this is the highest possible sum

// let arr = [5, 5, 100, 10, 5]

// let count = 20;

// let sum =0

// for (let i = 0; i < arr.length; i++) {

//     for (let j = i + 1; j < arr.length; j++) {

//         for (let k = j + 1; k < arr.length; k++) {
           
//             if (arr[i] + arr[j] + arr[k] == count) {
//                 sum=(arr[i]+arr[j]+arr[k])
                
//             }
            
//         }
//     }
// }console.log(sum)
