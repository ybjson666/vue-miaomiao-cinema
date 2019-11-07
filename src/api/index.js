import request from '../utils/request';

export const reqCity=()=>request('/api/cityList',{},'get');
export const reqNowPlaying=(id)=>request(`/api/movieOnInfoList?cityId=${id}`,{},'get');
export const reqComingPlaying=(id)=>request(`/api/movieComingList?cityId=${id}`,{},'get');
export const reqSearchList=(id,kw)=>request(`/api/searchList?cityId=${id}&kw=${kw}`,{},'get');
export const reqCinemaList=(id,kw)=>request(`/api/cinemaList?cityId=${id}`,{},'get');
export const reqLocation=()=>request(`/api/getLocation`,{},'get');
export const reqMovieDetail=(id)=>request(`/api/detailmovie?movieId=${id}`,{},'get');