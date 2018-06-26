import * as types from './actionTypes';
import axios from 'axios';

const API_URL = 'http://ts.ausgrads.academy:8765/';

const loadGlobalSuccess = (data) => ({type: types.LOAD_GLOBAL_SUCCESS, data});
const loadGlobalError = (error) => ({type: types.LOAD_GLOBAL_ERROR, globalHasErrored:error});
const loadGlobalLoading = (loading) =>({type: types.LOAD_GLOBAL_LOADING, globalIsLoading:loading});

export function globalFetchData({search}){
     const url = `${API_URL}/search?size=8&search=${search}`;
     return function (dispatch) { 
         dispatch(loadGlobalLoading(true));
         const request=axios.get(url);
         request
             .then((response) =>{ 
                 if(!response.status == 200)
                 {
                     throw Error(response.statusText);
                 }
                 dispatch(loadGlobalLoading(false));
                 response.data.search = search;
                 return response.data;
             })
             .then((data)=>dispatch(loadGlobalSuccess(data)))
             .catch((error)=>dispatch(loadGlobalError(error)));
     };
 }
