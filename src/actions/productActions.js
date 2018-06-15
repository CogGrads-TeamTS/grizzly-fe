import * as types from './actionTypes';
import axios from 'axios';

const API_URL = 'http://ts.ausgrads.academy:8765/products';
// const API_URL = 'http://localhost:8000/products';

const loadProductSuccess = (data) => ({type: types.LOAD_PRODUCT_SUCCESS, data});
const loadProductError = (error) => ({type: types.LOAD_PRODUCT_ERROR, productHasErrored:error});
const loadProductLoading = (loading) =>({type: types.LOAD_PRODUCT_LOADING, productIsLoading:loading});

const loadSingleProductSuccess = (data) => ({type: types.LOAD_SINGLE_PRODUCT_SUCCESS, data});
const loadSingleProductError = (error) => ({type: types.LOAD_SINGLE_PRODUCT_ERROR, singleProductHasErrored:error});
const loadSingleProductLoading = (loading) =>({type: types.LOAD_SINGLE_PRODUCT_LOADING, singleProductIsLoading:loading});

const FIRST_PAGE = 0;
const DEFAULT_PAGE_SIZE = 20;
const NO_PARAM = "id,desc";
const SEARCH = "";

export function productFetchData(search=SEARCH,pageNumber=FIRST_PAGE,size=DEFAULT_PAGE_SIZE,sortParam=NO_PARAM){

    const urlParams = `search=${search}&page=${pageNumber}&size=${size}&sort=${sortParam}`;
    const url = `${API_URL}/page?${urlParams}`;
    console.log("URL: " + url);
    //const  url ='http://localhost:3005/vendor/';
    return function (dispatch) {
        // get data from external data source
        dispatch(loadProductLoading(true));
        const request=axios.get(url);
        request
            .then((response) =>{ console.log(response);
                if(!response.status == 200)
                {
                    throw Error(response.statusText);
                }
                dispatch(loadProductLoading(false));
                return response.data;
            })
            .then((data)=>dispatch(loadProductSuccess(data)))
            .catch((error)=>dispatch(loadProductError(error)));
    }
}

export function productFetchDataByID(id){

    // const urlParams = `search=&page=&size=&sort=`;
     const url = `${API_URL}/${id}`;
     //const  url ='http://localhost:3005/vendor/';
     return function (dispatch) {
         // get data from external data source
         dispatch(loadSingleProductLoading(true));
         const request=axios.get(url);
         request
             .then((response) =>{ console.log(response);
                 if(!response.status == 200)
                 {
                     throw Error(response.statusText);
                 }
                 dispatch(loadSingleProductLoading(false));
                 return response.data;
             })
             .then((data)=>dispatch(loadSingleProductSuccess(data)))
             .catch((error)=>dispatch(loadSingleProductError(error)));
     }
 }

// const editProductSuccess = (payload) => ({ type: types.EDIT_PRODUCT_SUCCESS, payload });
// const editProductLoading = (loading) => ({ type: types.EDIT_PRODUCT_LOADING, payload: loading });
// const editProductError = (error) => ({ type: types.EDIT_PRODUCT_ERROR, payload: error });

// export function editProductAction(payload) {
//     console.log( payload);

//     return (dispatch) => {
//         // const request = axios.put(`${API_URL}/categories/edit/${id}`, {name: name, description: description});
//         const request = axios.put(`${API_URL}/products/${payload.id}`, payload );
//         request
//             .then((response) => {
//                 console.log(response);
//                 if (!response.status == 200) {
//                     throw Error(response.statusText);
//                 }
//                 dispatch(editProductSuccess(payload))
//             })
//             .catch((error) => { // Catch the error thrown if status isn't 200
//                 console.log(error);
//                 dispatch(editProductError(error));
//             })
//     };
// }


// // FIXME: Change the fields
// const addProductSuccess = (id,name,about,email,webpage,contact,address,portfolioURL) =>
//     ({  type: types.ADD_PRODUCT_SUCCESS ,
//         id:id, name:name, about:about, email:email, webpage:webpage, contact:contact,
//         address:address,portfolioURL:portfolioURL });
// const addProductError = (error) => ({type : types.ADD_PRODUCT_ERROR, payload: error});


// export function addProductAction(name,about,email,webpage,contact,address,portfolioURL){

//     return(dispatch) => {

//         //const  url ='http://localhost:3005/vendor/add';
//        // const request = axios.post(`http://localhost:3005/vendor/`, {name: name, about: about, email:email,webpage:webpage,
//            // contact:contact, address:address,  portfolioURL:portfolioURL });
//         const request = axios.post(`${API_URL}/product/add`, {name: name, about: about, email:email,webpage:webpage,
//             contact:contact, address:address,  portfolioURL:portfolioURL });
//         request
//             .then(( response) => {
//                 if (!response.status == 201) {
//                     throw Error(response.statusText);
//                 }console.log(response);
//                 dispatch(addProductSuccess( 
//                     response.data.id,
//                     response.data.name,
//                     response.data.about,
//                     response.data.email,
//                     response.data.webpage,
//                     response.data.contact,
//                     response.data.address,
//                     response.data.portfolioURL))
//             })
//             .catch((error) => { // Catch the error thrown if status isn't 200
//                 dispatch(addProductError(error));
//                 console.log(error);
//             })
//     };
// }

// const deleteProductSuccess =(id) => ({type:types.DELETE_PRODUCT_SUCCESS, payload:id});
// const deleteProductError = (error) => ({type:types.DELETE_PRODUCT_ERROR ,payload:error});

// export function deleteProductAction(id) {
//     console.log(id);
//     return(dispatch) => {
//         //const request = axios.delete(`http://localhost:3005/vendor/${id}`);
//         const request = axios.delete(`${API_URL}/product/${id}`);
//         request
//             .then((response) =>{
//                 if(!response.status == 200){
//                     throw Error(response.statusText);
//                 }
//                 dispatch(deleteProductSuccess(id));
//             })
//             .catch((error) =>{
//                 dispatch(deleteProductError(error));
//             })
//     };

// }
