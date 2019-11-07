import axios from 'axios';


export default(url,data,method)=>{
    return new Promise((resolve,reject)=>{
        if(method){
            axios.get(url).then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                reject(err)
            })
        }else{
            axios.post(url,data).then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                reject(err)
            })
        }
    })
}