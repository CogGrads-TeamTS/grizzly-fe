import * as types from './actionTypes';
import axios from 'axios'

const API_URL = 'http://ts.ausgrads.academy:8765';

const loadVendorsSuccess = (data) => ({type: types.LOAD_VENDORS_SUCCESS, data});
const loadVendorsError = (error) => ({type: types.LOAD_VENDORS_ERROR, vendorHasErrored:error});
const loadVendorsLoading = (loading) =>({type: types.LOAD_VENDORS_LOADING, vendorIsLoading:loading});


const FIRST_PAGE = 0;
const DEFAULT_PAGE_SIZE = 20;
const NO_PARAM = "";
const SEARCH = "";

//export function vendorsFetchData(search=SEARCH,pageNumber=FIRST_PAGE,size=DEFAULT_PAGE_SIZE,sortParam=NO_PARAM) {
export function vendorsFetchData(){
   // const urlParams = `search=&page=&size=&sort=`;
    const url = `${API_URL}/vendors`;
    //const  url ='http://localhost:3005/vendor/';
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


const addVendorSuccess = (id,name,about,email,webpage,contact,address,portfolioURL) =>
    ({  type: types.ADD_VENDORS_SUCCESS ,
        id:id, name:name, about:about, email:email, webpage:webpage, contact:contact,
        address:address,portfolioURL:portfolioURL });
const addVendorError = (error) => ({type : types.ADD_VENDORS_ERROR, payload: error});


export function addVendorAction(name,about,email,webpage,contact,address,portfolioURL){

    return(dispatch) => {
        const request = axios.post(`${API_URL}/vendors/add`, {name: name, about: about, email:email,webpage:webpage,
            contact:contact, address:address,  portfolioURL:portfolioURL });
        request
            .then(( response) => {
                if (!response.status == 200) {
                    throw Error(response.statusText);
                }
                dispatch(addVendorSuccess(
                    response.data.id,
                    response.data.name,
                    response.data.about,
                    response.data.email,
                    response.data.webpage,
                    response.data.contact,
                    response.data.address,
                    response.data.portfolioURL))
            })
            .catch((error) => { // Catch the error thrown if status isn't 200
                dispatch(addVendorError(error));
            })
    };
}
