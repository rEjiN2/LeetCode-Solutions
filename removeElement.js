function removeElement(arr , val){
    if(arr.length<=0){
        return "Empty Array"
    }
    const len= arr.length
for(i=0;i<len;i++){
   
    if(arr[i]==val){
        arr.splice(i,1)
        i--
    }
}
return arr;
}

console.log(removeElement([0,1,2,2,3,0,4,2]  , 2))
