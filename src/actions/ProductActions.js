import * as types from './actionTypes';
import axios from 'axios';

const API_URL = 'http://ts.ausgrads.academy:8765/products';

const loadProductSuccess = (data) => ({type: types.LOAD_PRODUCT_SUCCESS, data});
const loadProductError = (error) => ({type: types.LOAD_PRODUCT_ERROR, productHasErrored:error});
const loadProductLoading = (loading) =>({type: types.LOAD_PRODUCT_LOADING, productIsLoading:loading});

const loadSingleProductSuccess = (data) => ({type: types.LOAD_SINGLE_PRODUCT_SUCCESS, data});
const loadSingleProductError = (error) => ({type: types.LOAD_SINGLE_PRODUCT_ERROR, singleProductHasErrored:error});
const loadSingleProductLoading = (loading) =>({type: types.LOAD_SINGLE_PRODUCT_LOADING, singleProductIsLoading:loading});

const loadSingleProductImageSuccess = (data) => ({type: types.LOAD_SINGLE_PRODUCT_IMAGE_SUCCESS, data});
const loadSingleProductImageError = (error) => ({type: types.LOAD_SINGLE_PRODUCT_IMAGE_ERROR, singleProductImageHasErrored:error});
const loadSingleProductImageLoading = (loading) =>({type: types.LOAD_SINGLE_PRODUCT_IMAGE_LOADING, singleProductImageIsLoading:loading});

const FIRST_PAGE = 0;
const DEFAULT_PAGE_SIZE = 20;
const NO_PARAM = "id,desc";
const SEARCH = "";
const CATEGORY = "";

//export function vendorsFetchData(search=SEARCH,pageNumber=FIRST_PAGE,size=DEFAULT_PAGE_SIZE,sortParam=NO_PARAM) {
export function productFetchData(search=SEARCH,pageNumber=FIRST_PAGE,size=DEFAULT_PAGE_SIZE,sortParam=NO_PARAM, catId=CATEGORY){

    const urlParams = `search=${search}&page=${pageNumber}&size=${size}&sort=${sortParam}&category=${catId}`;
    const url = `${API_URL}/page?${urlParams}`;
    //const  url ='http://localhost:3005/vendor/';
    return function (dispatch) {
        // get data from external data source
        dispatch(loadProductLoading(true));
        console.log("URL IS: " + url)
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

 export function productFetchImagesByID(id){

    // const urlParams = `search=&page=&size=&sort=`;
     const url = `${API_URL}/${id}/images`;
     console.log(url)
     //const  url ='http://localhost:3005/vendor/';
     return function (dispatch) {
         // get data from external data source
         dispatch(loadSingleProductImageLoading(true));
         const request=axios.get(url);
         request
             .then((response) =>{ console.log(response);
                 if(!response.status == 200)
                 {
                     throw Error(response.statusText);
                 }
                 dispatch(loadSingleProductImageLoading(false));
                 return response.data;
             })
             .then((data)=>dispatch(loadSingleProductImageSuccess(data)))
             .catch((error)=>dispatch(loadSingleProductImageError(error)));
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


// FIXME: Change the fields
const addProductSuccess = (id, name, description, brand, catId, price, discount, rating) => ({  
    type: types.ADD_PRODUCT_SUCCESS ,
    id, 
    name, 
    description,
    brand, 
    catId,
    price,
    discount,
    rating 
});
const addProductError = (error) => ({type : types.ADD_PRODUCT_ERROR, payload: error});

export function addProductAction(name, description, brand, catId, price, discount, rating){

    return(dispatch) => {

        //const  url ='http://localhost:3005/vendor/add';
       // const request = axios.post(`http://localhost:3005/vendor/`, {name: name, about: about, email:email,webpage:webpage,
           // contact:contact, address:address,  portfolioURL:portfolioURL });
        const request = axios.post(`${API_URL}/add`, name, description, brand, catId, price, discount, rating);
        request
            .then(( response) => {
                if (!response.status == 200) {
                    throw Error(response.statusText);
                }console.log(response);
                dispatch(addProductSuccess( 
                    response.data.id,
                    response.data.name,
                    response.data.description,
                    response.data.brand,
                    response.data.catId,
                    response.data.price,
                    response.data.discount,
                    response.data.rating
                ))
            })
            .catch((error) => { // Catch the error thrown if status isn't 200
                dispatch(addProductError(error));
                console.log(error);
            })
    };
}

const deleteProductSuccess =(id) => ({type:types.DELETE_PRODUCT_SUCCESS, payload:id});
const deleteProductError = (error) => ({type:types.DELETE_PRODUCT_ERROR ,payload:error});

export function deleteProductAction(id) {
    console.log(id);
    return(dispatch) => {
        const request = axios.delete(`${API_URL}/${id}`);
        request
            .then((response) =>{
                if(!response.status == 200){
                    throw Error(response.statusText);
                }
                dispatch(deleteProductSuccess(id));
            })
            .catch((error) =>{
                dispatch(deleteProductError(error));
            })
    };

}

// export function addProductAction(name, description, brand, catId, price, discount, rating){

//     return(dispatch) => {

//         //const  url ='http://localhost:3005/vendor/add';
//        // const request = axios.post(`http://localhost:3005/vendor/`, {name: name, about: about, email:email,webpage:webpage,
//            // contact:contact, address:address,  portfolioURL:portfolioURL });
//         const request = axios.post(`${API_URL}/add`, name, description, brand, catId, price, discount, rating);
//         request
//             .then(( response) => {
//                 if (!response.status == 200) {
//                     throw Error(response.statusText);
//                 }console.log(response);
//                 dispatch(addProductSuccess( 
//                     response.data.id,
//                     response.data.name,
//                     response.data.description,
//                     response.data.brand,
//                     response.data.catId,
//                     response.data.price,
//                     response.data.discount,
//                     response.data.rating
//                 ))
//             })
//             .catch((error) => { // Catch the error thrown if status isn't 200
//                 dispatch(addProductError(error));
//                 console.log(error);
//             })
//     };
// }

const addProductImageSuccess = (name, sort) => ({ type: types.ADD_PRODUCT_IMAGE_SUCCESS, name, sort});

export function addProductImages(id, file, sort) {
    console.log(file[0]);
    console.log(sort);
    return (dispatch) => {
        const request = axios.post(`${API_URL}/${id}/images/add`, file[0], sort);
        request
        .then(( response) => {
            if (!response.status == 201) {
                throw Error(response.statusText);
            }console.log(response);
            dispatch(addProductImageSuccess( 
                response.data,
            ))
        })
        .catch((error) => { // Catch the error thrown if status isn't 200
            dispatch(addProductError(error));
            console.log(error);
        })
    };
}
