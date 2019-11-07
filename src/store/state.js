export default{
    cityList:localStorage.getItem('cityDatas')?JSON.parse(localStorage.getItem('cityDatas')):[],
    curCity:localStorage.getItem('curCity')?JSON.parse(localStorage.getItem('curCity')):{
        nm:"成都",
        id:"59"
    },
    nowPlayingList:[],
    comingPlayingList:[],
    searchList:[],
    cinemaList:[],
    localCity:JSON.parse(localStorage.getItem('localCity')) || {},
    movieDetail:{}
}