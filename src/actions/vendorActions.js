import * as types from './actionTypes';
import axios from 'axios'

const API_URL = 'http://ts.ausgrads.academy:8080';

const loadVendorsSuccess = (data) => ({type: types.LOAD_VENDORS_SUCCESS, data});
const loadVendorsError = (error) => ({type: types.LOAD_VENDORS_ERROR, vendorHasErrored:error});
const loadVendorsLoading = (loading) =>({type: types.LOAD_VENDORS_LOADING, vendorIsLoading:loading});


const FIRST_PAGE = 0;
const DEFAULT_PAGE_SIZE = 20;
const NO_PARAM = "";
const SEARCH = "";

//export function vendorsFetchData(search=SEARCH,pageNumber=FIRST_PAGE,size=DEFAULT_PAGE_SIZE,sortParam=NO_PARAM) {
export function vendorsFetchData(){
   // const urlParams = `search=${search}&page=${pageNumber}&size=${size}&sort=${sortParam}`;
    //const url = `${API_URL}/vendors/page?${urlParams}`;
    const  url ='http://localhost:3004/vendor';
    return function (dispatch) {
        // get data from external data source
        dispatch(loadVendorsLoading(true));
        const request=axios.get(url);
        request
            .then((response) =>{ console.log(response);
                if(!response.status == 200)
                {
                    throw Error(response.statusText);
                }
                dispatch(loadVendorsLoading(false));
                return response.data;
            })
            .then((data)=>dispatch(loadVendorsSuccess(data)))
            .catch((error)=>dispatch(loadVendorsError(error)));
    }
}

const editVendorSuccess = (payload) => ({ type: types.EDIT_VENDOR_SUCCESS, payload });
const editVendorLoading = (loading) => ({ type: types.EDIT_VENDOR_LOADING, payload: loading });
const editVendorError = (error) => ({ type: types.EDIT_VENDOR_ERROR, payload: error });

export function editVendorAction(payload) {
    console.log( payload);

    return (dispatch) => {
        // const request = axios.put(`${API_URL}/categories/edit/${id}`, {name: name, description: description});
        const request = axios.put(`http://localhost:3004/vendor/${payload.id}`, payload );
        request
            .then((response) => {
                console.log(response);
                if (!response.status == 200) {
                    throw Error(response.statusText);
                }
                dispatch(editVendorSuccess(payload))
            })
            .catch((error) => { // Catch the error thrown if status isn't 200
                console.log(error);
                dispatch(editVendorError(error));
            })
    };
}