//____________________set()________________
//it contains only unique values not duplicate values
//in set can add num,string,array,charcter,element but can't store value in key value format object like map
// prototype of set is add(),clear(),constructor(),has(),delete(),entries(),foreach(),values(),size()
// has()=  use foe check value present or not

   "use strict";
   
// set ex=
let myArray = [1,2,3,4]
let obj2 = new Set(myArray);
obj2.add(5)
console.log(obj2);

obj2.delete(5)
console.log(obj2);


//__________________clear/delete all values of array
// obj.clear()
// console.log(obj);

//___________has()_______
console.log(obj2.has(10));  // false bcz not present




let obj3={name:"dipali"}
obj2.add(obj3)

//________________for iterate object  (methode1)_
console.log(obj2);
for(let i of obj2){
    console.log(i);
}


//________________for iterate object(methode2)_

obj2.forEach((ele)=>{
    console.log(ele);
})


//_________________________map()_____
//can store values in key value format

let myMap = new Map(); // syntax

let myMap1 = new Map([["a1","dipali"],["a3","datir"]])

console.log(myMap1);


//______________set()_
//set use for set new value 

myMap1.set("a2","nikita")
console.log(myMap1);

//_________ delete()_
// delete key

myMap1.delete("a2")
console.log(myMap1);

//__________________clear/delete all values of map

// myMap1.clear()
// console.log(myMap1);


//_____________________get()_
// for get or see values like has()

console.log(myMap1.get("a3"));

//____________________for iterate map()_

for(let i of myMap1){

    console.log(i);

}

//also use in this way

for(let [key,value] of myMap1){
console.log(`key ${key} , value ${value}`);
}


//_________________foreach for iterate value of map_

myMap1.forEach((key,value) =>{
console.log(key,value);
})


// __________weak set & weak map______
// in weak set & weak map only can store object but can not be iterate means cant use foe for each loop
// prototype add,has,delete

let ws = new WeakSet()

let obj1={"name":"d"};
let obj5={"l":"d"};
ws.add(obj1)
ws.add(obj5)

console.log(ws);

//________________hashmap using function for check frequency
let s = "anagram"
function hashmap(s){


let map = {}
for(let i of s){
    map[i]=(map[i] +1) || 1
}
console.log(map);
}  hashmap(s)


//___________hasmap for check length

let str = "anagram"
function hashMap (str){
    let map = new Map()
    for (i=0;i<str.length;i++){
        if(map.get(str[i] )== undefined){
            map.set(str[i],1)
        }
        else{
            map.set(str[i],map.get(str[i])+1)
        }

    } console.log(map);
}hashMap (str)


//____________________set() set use for unique element only
let s2 = "mooooooooc"
if(!s2){
          return 0
       }
       const ele = new Set()  // same as new map , empty objech {}
          while(e<s2.length){
             if(!ele.has(s2[e])) // S me e 0 hoga to add hoga a bad me e ++ hoga to a,b,c add hoga
             {
                ele.add(s2[e])
                e++
             }
             

 