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

function authHeader() {
    return { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
}

export function productFetchData(search=SEARCH,pageNumber=FIRST_PAGE,size=DEFAULT_PAGE_SIZE,sortParam=NO_PARAM, catId=CATEGORY){

    const urlParams = `search=${search}&page=${pageNumber}&size=${size}&sort=${sortParam}&category=${catId}`;
    const url = `${API_URL}/page?${urlParams}`;

    //const  url ='http://localhost:3005/vendor/';
    return function (dispatch) {
        // get data from external data source
        dispatch(loadProductLoading(true));
        const request=axios.get(url);
        request
            .then((response) =>{ //console.log(response);
                if(!response.status === 200)
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
             .then((response) =>{ //console.log(response);
                 if(!response.status === 200)
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

    //const  url ='http://localhost:3005/vendor/';
    return function (dispatch) {
        // get data from external data source
        dispatch(loadSingleProductImageLoading(true));
        const request=axios.get(url);
        request
            .then((response) =>{
                if(!response.status === 200)
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

 const editProductSuccess = (payload) => ({ type: types.EDIT_PRODUCT_SUCCESS, payload });
//  const editProductLoading = (loading) => ({ type: types.EDIT_PRODUCT_LOADING, payload: loading });
 const editProductError = (error) => ({ type: types.EDIT_PRODUCT_ERROR, payload: error });



 export function editProductAction(payload, images) {
    console.log( payload);

    
    return (dispatch) => {
        // const request = axios.put(`${API_URL}/categories/edit/${id}`, {name: name, description: description});
        const request = axios.put(`${API_URL}/edit/${payload.id}`, payload, {headers: authHeader()});
        request
            .then((response) => {
                //console.log(response);
                if (!response.status === 200) {
                    throw Error(response.statusText);
                }

                // Update pictures
                if(images.length > 0) {
                    var i;
                    for(i = 0; i < images.length; i++){
                        var image = images[i]
                        dispatch(editProductImage(image.id, image.url, image.sort))
                    }
                }

                dispatch(editProductSuccess(payload))
            })
            .catch((error) => { // Catch the error thrown if status isn't 200
                console.log(error);
                dispatch(editProductError(error));
            })
    };
}


// FIXME: Change the fields
const addProductSuccess = (data) => ({type: types.ADD_PRODUCT_SUCCESS, data});
const addProductError = (error) => ({type : types.ADD_PRODUCT_ERROR, payload: error});
export function addProductAction({name, description, brand, catId, price, discount, rating, pictures, callback}){

    return(dispatch) => {

        const request = axios.post(`${API_URL}/add`, {name, description, brand, catId, price, discount, rating}, {headers: authHeader()});
        request
            .then((response) => {
                if (!response.status === 200 || !response.status) {
                    callback("success");
                    throw Error(response.statusText);
                }

                // Only add pictures if they exist
                if(pictures.length > 0) {
                    var i;
                    for(i = 0; i < pictures.length; i++){
                        var picture = pictures[i]
                        dispatch(addProductImages(response.data.id, picture, i));
                    }
                }
                
                return response.data;
            })
            .then((data) => dispatch(addProductSuccess(data)))
            .then(() => {
                callback("success");
            })
            .catch((error) =>  dispatch(addProductError(error)))
    }
}

const deleteProductSuccess =(id) => ({type:types.DELETE_PRODUCT_SUCCESS, payload:id});
const deleteProductError = (error) => ({type:types.DELETE_PRODUCT_ERROR ,payload:error});

export function deleteProductAction({id,callback}) {
    return(dispatch) => {
        const request = axios.delete(`${API_URL}/${id}`, {headers: authHeader()});
        request
            .then((response) =>{
                if(!response.status === 200 || !response.status){
                    callback("error");
                    throw Error(response.statusText);
                }
                //console.log(id);
                callback("success");
                dispatch(deleteProductSuccess(id));
            })
            .catch((error) =>{
                dispatch(deleteProductError(error));
            })
    };

}

const addProductImageSuccess = (name, sort) => ({ type: types.ADD_PRODUCT_IMAGE_SUCCESS, name, sort});

export function addProductImages(id, file, sort) {

    const url = `${API_URL}/${id}/images/add`;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('sort', sort);
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
    }

    return (dispatch) => {
        const request = axios.post(url, formData, config);
        request
        .then(( response) => {
            if (!response.status === 201) {
                throw Error(response.statusText);
            }
            dispatch(addProductImageSuccess( 
                response.data,
            ))
        })
        .catch((error) => { // Catch the error thrown if status isn't 200
            dispatch(addProductError(error));
        })
    };
}

const deleteProductImageSuccess =(image) => ({type:types.DELETE_PRODUCT_IMAGE_SUCCESS, payload:image});
export function deleteProductImage(image) {
    console.log(image);
    return(dispatch) => {
        const request = axios.delete(`${API_URL}/image/delete`, {params: {id:image.id, url:image.url}}, {headers: authHeader()});
        request
            .then((response) =>{
                if(!response.status === 200){
                    throw Error(response.statusText);
                }

                console.log(response.data);
                dispatch(deleteProductImageSuccess(image));
            })
            .catch((error) =>{
                dispatch(deleteProductError(error));
            })
    };

}

const editProductImageSuccess =(image) => ({type:types.EDIT_PRODUCT_IMAGE_SUCCESS, payload:image});
export function editProductImage(id, url, sort) {

    return (dispatch) => {
        const request = axios.put(`${API_URL}/edit/0/images?id=${id}&url=${url}&sort=${sort}`, {}, {headers: authHeader()});
        request
        .then(( response) => {
            if (!response.status === 200) {
                throw Error(response.statusText);
            }
            dispatch(editProductImageSuccess(response.data))
        })
        .catch((error) => { // Catch the error thrown if status isn't 200
            dispatch(editProductError(error));
        })
    };
}
