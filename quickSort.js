function QuickSort(arr){
    if(arr.length<=1){
        return arr;
    }
    var pivot = arr[arr.length-1];
    var i = 0;
    for(j=0;j<arr.length ;j++){
        if(arr[j]<pivot){
            [arr[i],arr[j]] =  [arr[j],arr[i]];
            i++;
        }
    }
    [arr[i] , arr[arr.length-1]] = [arr[arr.length-1] ,arr[i]]
    
    return QuickSort(arr.slice(0,i)).concat(pivot , QuickSort(arr.slice(i+1)))
}

console.log(QuickSort([4,6,8,3,2,1,9]))