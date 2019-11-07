import {
    GET_CITYLIST,
    GET_NOWPLAYING,
    GET_COMINGLAYING,
    GET_SEARCHLIST,
    GET_CINEMALIST,
    GET_LOCATION,
    GET_MOVIEDETAIL
} from './types';

import {
    reqCity,
    reqNowPlaying,
    reqComingPlaying,
    reqSearchList,
    reqCinemaList,
    reqLocation,
    reqMovieDetail
} from '../api';

export default{
    async get_cityList({commit}){
        const res=await reqCity();
        if(res.status==200){
            const citys=res.data.data.cities;
            localStorage.setItem('cityDatas',JSON.stringify(citys));
            commit(GET_CITYLIST,{citys})
        }
    },
    async get_nowPlaying({state,commit},callBack){
        const cityId=state.curCity.id;
        const res=await reqNowPlaying(cityId);
        if(res.status==200){
            callBack();
            const nowPlayings=res.data.data.movieList;
            commit(GET_NOWPLAYING,{nowPlayings})
             
        }
    },
    async get_comingPlaying({state,commit},callBack){
        const cityId=state.curCity.id;
        const res=await reqComingPlaying(cityId);
        if(res.status==200){
            callBack()
            const comingPlayings=res.data.data.comingList;
            commit(GET_COMINGLAYING,{comingPlayings})
            
        }
    },
    async get_searchList({state,commit},[kw,callBack]){
        const cityId=state.curCity.id;
        const res=await reqSearchList(cityId,kw);
        let searchList=[];
        if(res.status==200){
            callBack()
            if(res.data.data.movies){
                 searchList=res.data.data.movies.list;
            }else{
                searchList=[];
            }
            commit(GET_SEARCHLIST,{searchList})
            
        }
    },
    async get_cinemaList({state,commit},callBack){
        const cityId=state.curCity.id;
        const res=await reqCinemaList(cityId);
        if(res.status==200){
            callBack()
            const cinemaList=res.data.data.cinemas;
            commit(GET_CINEMALIST,{cinemaList})
            
        }
    },
    async get_location({commit},callBack){
        const res=await reqLocation();
        if(res.status==200){
            const city=res.data.data;
            localStorage.setItem('localCity',JSON.stringify(city));
            let local_city=JSON.parse(localStorage.getItem('localCity'));
            commit(GET_LOCATION,local_city)
            callBack()
        }
    },
    async get_movieDetail({commit},id){
        const res=await reqMovieDetail(id);
        if(res.status==200){
            const movie=res.data.data.detailMovie;
            commit(GET_MOVIEDETAIL,movie)
        }
    }
}
