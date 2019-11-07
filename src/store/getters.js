import {toCom} from '../utils/tool'

export default{
    formatCity:(state)=>{
        const {cityList}=state;
        var cityArr=[];
        cityList.map((city)=>{
            if(!toCom(city.py,cityArr)){
                cityArr.push({index:city.py,list:[{nm:city.nm,id:city.id}]})
            }else{
                cityArr.map((item)=>{
                    if(item.index==city.py){
                        item.list.push({nm:city.nm,id:city.id})
                    }
                })
            }
        })
       
        return cityArr.sort((a,b)=>{
            if(a.index>b.index){
                return 1
            }else if(a.index<b.index){
                return -1
            }else{
                return 0
            }
        });
        

    },
    getHotCities:(state)=>{
        const {cityList}=state;
        cityList.map((city)=>city.py=city.py.substring(0,1).toLocaleUpperCase());
        let hotCitys=cityList.filter(city=>city.isHot===1)
        return hotCitys
    }
}