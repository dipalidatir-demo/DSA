
//___________________________________________Array________________________________

// array = means we can store multiple value in single variable

const marks = [34,23,24,93,73,25]
const fruits = ['orange','apple','pineapple']
const mixed =['str',89,[3,6]]
//____________________________________________acess index_________________________

//array indexing start from [0,1,2,3.....n] so we want to print any perticular value then use its inde value
console.log(mixed[0]);    // (mixed[index value])

//________________________________________________length_______________________

// length is property which shows length of array means how much elements in array
//arr.length
console.log(mixed.length);  //3 elements in array

const arr =[23,234,78,'orange'] // or

//___________________________________________new Array() method___________________

const arr1 = new Array (23,234,78,'orange') // new Array method ka use krke hum without [] array ko likh skte hai
let str='dip'

console.log(arr1);



//___________________________________________Array.isArray() method_________________

// // this methods show this is array or not in true false format

console.log(Array.isArray(arr1));  //true bcz this is array
console.log(Array.isArray(str));    // false bcz this is not array
console.log(Array.isArray(''));   // false
console.log(Array.isArray('nik')); // false
console.log(Array.isArray([3,5,7])); // true



//__________________________________________change value of array__________________

let arr2 = [5,8,3,7,6]
arr2[0] = 'nikita'   // change value of index 0 5 => nikita
console.log(arr2);


//____________________________________________access value _____________________________

arr[0] = 'dipali'
arr[1] = 'datir'
let myname = arr[0]  // using variable you can and index number we can access value
let sirname= arr[1]
console.log('name:',myname,sirname);


//_____________________________________________indexOf method _____________________

// use for find  index value of element
let arr3 = [4,7,4,5,6,92,45,4]
let value = arr3.indexOf(7)  // index value of 7 is 1
console.log(value);


//_____________________________________________mutating and modifying array__________

//1) push() => use to add value in end of array

arr4= [6,78,34,67,9,3,2,6]

 arr4.push(899)  // add 899 at the end of array
 console.log(arr4);

 //2) unshift() => use to add value in front or start of array

 arr4.unshift(1000)   // add 1000 at start
console.log(arr4);

//3) pop() => use to remove value from end of array

arr4.pop()  // no value in pop bracket
console.log(arr4);  // removed 899 from end

//4) shift() => remove value from start

arr4.shift()   // no value in pop bracket
console.log(arr4);  //remove 1000 from start of array


//5) splice() =>  it use to removing no.of elemets from perticular index value
     //  0,1 ,2 ,3 ,4 ,5 ,6
//arr4= [6,78,34,67,9,3,2,6]
arr4.splice(1,3) // it start from index 1 and from index 1 removing 3 value including index 1
console.log(arr4);  // remove 78,34,67

//6) reverse() => use for reverse array
arr4.reverse()       //[ 6, 9, 3, 2, 6 ] reverse this array
console.log(arr4);  // [ 6, 2, 3, 9, 6 ]

//7) concat()  => use for merge two arrays  but for concate always store in variable then console it 
let arr5 = [67,98,7,3]  // arr4 = [ 6, 2, 3, 9, 6 ] ,arr5 = [67,98,7,3]
arr5=arr4.concat(arr5) //[ 6,  2, 3, 9, 6,  67, 98, 7, 3]
 console.log(arr5);    


//_______________________________________object_______(for key value pair use object)____

// object use to store strings,array , booleans ,numbers ,
// we can store complex value in it ans acess perticular value
let myObj = {
    name : 'dip',
    edu : 'engg',
    isActive : true,
    marks : [4,6,8,5,3,2]   
}

// acess using .
console.log(myObj);
console.log(myObj.marks); // we can access marks of object
console.log(myObj.name)  // we can access name of object
console.log(myObj.edu)  //we can access edu of object

// acess using []
console.log(myObj['edu']) // 2nd way of acess key




//_____________________________________________________convert array to object____________________________________


var techBrand = [
    "facebook",
    "apple",
    "amazon",
    "netflix",
    "google"
]

var object = {...techBrand};
console.log(object);


//___________________________________________________fille array with data_______________________________
//                 size of array is 6 
var newArray = new Array(6).fill("hii")
console.log(newArray);


//_________________________________________remove duplicates from array_______________________________

var duplicate = [
    "facebook",
    "facebook",
    "apple",
    "netflix",
    "netflix",
    "google",
    "google"
]

var newArr = Array.from(new Set(duplicate));
console.log(newArr);


//__________________________________________merge arrays_____________________________________________________


var array1 = [
    "facebook",
    "apple",
    "netflix",

]

var array2 = [
    "facebook",
    "apple",
    "netflix",
]

techBrands = [...array1,...array2]
console.log(techBrands);


//__________________________________________________remove first element from array_______________________________

var remove;
var brands = [
    "adidas",
    "nike",
    "puma",
    "rebook"
]

remove= brands.shift();    // variable bamvun tyat store krne mg console krne
console.log(brands);    
//  console.log(remove);  // remove la console kel tr fkt remove kelela ele disel


//______________________________________________add items at the beggining of the array_______________________________

var brands = [
    "Adidas",
    "Nike",
    "Puma",
    "Rebook"
]
add = brands.unshift("Fila")
console.log(brands);         // bcz we want whole array


//_____________________________________________get last index of the items______________________________________

var lastIndex;
var brand =[
    "adidas",
    "nike",
    "puma",
    "rebook"
]

lastIndex = brands.lastIndexOf("adidas")

console.log(lastIndex);


//___________________________________________________add Array values from right to left___________________________

var num_array =[2,4,6,8,10]

num_array.reduceRight((total,num))
  return total + num



  //