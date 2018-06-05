import * as types from './actionTypes';
import axios from 'axios'

const API_URL = 'http://ts.ausgrads.academy:8080';

const loadVendorsSuccess = (vendors) => ({type: types.LOAD_VENDORS_SUCCESS, vendors});
const loadVendorsError = (error) => ({type: types.LOAD_VENDORS_ERROR, vendorHasErrored:error});
const loadVendorsLoading = (loading) =>({type: types.LOAD_VENDORS_LOADING, vendorIsLoading:loading});


const FIRST_PAGE = 0;
const DEFAULT_PAGE_SIZE = 20;
const NO_PARAM = "";
const SEARCH = "";

export function vendorsFetchData(search=SEARCH,pageNumber=FIRST_PAGE,size=DEFAULT_PAGE_SIZE,sortParam=NO_PARAM) {

    const urlParams = `search=${search}&page=${pageNumber}&size=${size}&sort=${sortParam}`;
    const url = `${API_URL}/vendors/page?${urlParams}`;

    return function (dispatch) {
        // get data from external data source
        dispatch(loadVendorsLoading(true));
        const request=axios.get(url);
        request
            .then((response) =>{
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