let arr= [2,1,5,4,6,9,7,3,0,44,23,11,98]
function mergeSort(arr,start,end){
    if(start==end){
        let newArr=[]
        newArr[0]=arr[start]
        return newArr
    }
    let mid=Math.floor((start+end)/2)
    let left = mergeSort(arr,start,mid)
    let right = mergeSort(arr,mid+1,end)
    let result = mergeArr(left,right)
    return result
}
function mergeArr(arr1,arr2){
    let result=[]
    let i=0
    let j=0
    let k=0
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            result[k]=arr1[i]
            i++
            k++
        }else{
            result[k]=arr2[j]
            j++
            k++
        }
    }
    while(i<arr1.length){
        result[k]=arr1[i]
        i++
        k++
    }
    while(j<arr2.length){
        result[k]=arr2[j]
        j++
        k++
    }
    return result
} console.log(mergeSort(arr,0,arr.length-1));