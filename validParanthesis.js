function validParanthesis(str){
    if(str.length==0 || str.length < 2){
        return false;
    }
    var stack = [];
    for(i=0;i<str.length;i++){
       if(str[i]=="(" || str[i]=="{" || str[i]=="["){
        stack.push(str[i]);
        
       }
       else{
        if(stack.length==0){
            return false;
        }
        let last = stack.pop();
        if(str[i]==")" && last !== "("){
            return false;
        }
        if(str[i]=="}" && last !== "{"){
            return false;
        }
        if(str[i]=="]" && last !=="["){
            return false;
        }
       }
    }
    return stack.length==0;
}

console.log(validParanthesis("[{}]"));