import * as types from './actionTypes';
import axios from 'axios';

const API_URL = 'http://ts.ausgrads.academy:8765/user';

const loadUserSuccess = (data) => ({type: types.LOAD_USER_SUCCESS, data});
const loadUserError = (error) => ({type: types.LOAD_USER_ERROR, userHasErrored:error});
const loadUserLoading = (loading) =>({type: types.LOAD_USER_LOADING, userIsLoading:loading});

export function fetchUserByID(){
    const accessToken = localStorage.getItem('access_token');
   // console.log(accessToken);
     const url = `${API_URL}`;
     return function (dispatch) { 
         dispatch(loadUserLoading(true));
         const request=axios.get(url, { headers: { Authorization: `Bearer ${accessToken}` } });
         request
             .then((response) =>{ 
                 if(!response.status === 200)
                 {
                     throw Error(response.statusText);
                 }
                 dispatch(loadUserLoading(false));
                 return response.data;
             })
             .then((data)=>dispatch(loadUserSuccess(data)))
             .catch((error)=>dispatch(loadUserError(error)));
     };
 }

const editUserSuccess = (data) => ({type: types.EDIT_USER_SUCCESS, data });
const editUserError = (error) => ({type: types.EDIT_USER_ERROR, payload: error});
// const editUserLoading = (loading) => ({type: types.EDIT_USER_LOADING, payload: loading})

export function editUserById(data){

    return(dispatch) => { console.log(data);
        const request = axios.put(`${API_URL}/edit/${data.id}`, data);

        request
            .then((response) => {
                if(!response.status === 200){
                    throw Error(response.statusText);
                }
                dispatch(editUserSuccess(data));
            })
            .catch((error) => {
                dispatch(editUserError(error));
            })
    };
}
