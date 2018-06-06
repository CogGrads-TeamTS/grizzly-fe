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
    const  url ='http://localhost:3000/vendor';
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