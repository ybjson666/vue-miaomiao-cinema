import {
    GET_CITYLIST,
    CHOOSE_CITYLIST,
    GET_NOWPLAYING,
    GET_COMINGLAYING,
    GET_SEARCHLIST,
    GET_CINEMALIST,
    GET_LOCATION,
    GET_MOVIEDETAIL
} from './types';

export default{
    [GET_CITYLIST](state,{citys}){
        state.cityList=citys
    },
    [CHOOSE_CITYLIST](state,city){
        localStorage.setItem('curCity',JSON.stringify(city))
        let curCity=JSON.parse(localStorage.getItem('curCity'));
        state.curCity=curCity
    },
    [GET_NOWPLAYING](state,{nowPlayings}){
        state.nowPlayingList=nowPlayings
    },
    [GET_COMINGLAYING](state,{comingPlayings}){
        state.comingPlayingList=comingPlayings
    },
    [GET_SEARCHLIST](state,{searchList}){
        state.searchList=searchList
    },
    [GET_CINEMALIST](state,{cinemaList}){
        state.cinemaList=cinemaList
    },
    [GET_LOCATION](state,city){
        state.localCity=city
    },
    [GET_MOVIEDETAIL](state,movieDetail){
        state.movieDetail=movieDetail
    }
    
    
}
