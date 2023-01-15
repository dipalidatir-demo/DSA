let arr = [2,34,4,4,4,4,46,8,8,8,8,5,4,7]

function frequency (arr){
    //let count =0
let map = new Map ()
for(i=0;i<arr.length;i++){
    if(map.get (arr[i]) == undefined){
        map.set(arr[i] , 1)
    } else {
        map.set(arr[i], map.get(arr[i])+1)
    }
//count ++
}  console.log(map) //,count);

} frequency (arr)
