import * as types from './actionTypes';
import axios from 'axios';

const API_URL = 'http://ts.ausgrads.academy:8765/user';

const loadUserSuccess = (data) => ({type: types.LOAD_USER_SUCCESS, data});
const loadUserError = (error) => ({type: types.LOAD_USER_ERROR, userHasErrored:error});
const loadUserLoading = (loading) =>({type: types.LOAD_USER_LOADING, userIsLoading:loading});

export function fetchUserByID(id){

     const url = `${API_URL}/${id}`;
     return function (dispatch) { console.log(url);
         dispatch(loadUserLoading(true));
         const request=axios.get(url);
         request
             .then((response) =>{ console.log(response);
                 if(!response.status == 200)
                 {console.log('test');
                     throw Error(response.statusText);
                 }
                 dispatch(loadUserLoading(false));
                 console.log(response.data);
                 return response.data;
             })
             .then((data)=>dispatch(loadUserSuccess(data)))
             .catch((error)=>dispatch(loadUserError(error)));
     }
 }