export const toCom=(firstLetter,arr)=>{
    for(var i=0;i<arr.length;i++){
        if(arr[i].index==firstLetter){
            return true;
        }
    }
    return false;
        
    }
    
