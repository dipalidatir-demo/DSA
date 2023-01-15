let arr = [3,5,8,6,2,0]
function insetionSort(arr){
    for(i=1;i<arr.length;i++){
        for(j=i-1;j>=0;j--){
            if(arr[j]> arr[j+1]){
                let temp=arr[j]     // swapping usingable third var
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }else{
                break
            }
        }
    }
    return arr
} console.log(insetionSort(arr));