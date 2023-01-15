let arr = [9,5,7,3,5,0,1]
function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        let flag = true     // flag use for to let the prog know that a certain condition has met it act as boolean
        for(j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
                flag = false
            }
        }
        if(flag){
            break
        }
    }
    return arr
}
console.log(bubbleSort(arr));