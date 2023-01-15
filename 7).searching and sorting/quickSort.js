// t.c = o(n^2)
let arr = [1,6,8,2,7,0]
function quickSort (arr,start,end){
if(start>=end){
    return
}
let pivot = arr[end]
let pivotPos=partition(arr,pivot,start,end)
quickSort(arr,start,pivotPos-1)
quickSort(arr,pivotPos+1,end)
}
function partition(arr,pivot,start,end){
    let i =start
    let j =end
    while(i<=start){
        if(arr[i]<=pivot){
            swap(arr,i,j)
            i++
            j++
        }else{
            i++
        }
    }
    return(j-1)
}function swap(arr,i,j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}
quickSort(arr,0,arr.length-1)
console.log( quickSort (arr));