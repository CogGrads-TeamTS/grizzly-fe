import * as types from './actionTypes';

import axios from 'axios'

const API_URL = 'http://ts.ausgrads.academy:8765';
const loadCategoriesSuccess = (data) => ({type: types.LOAD_CATEGORIES_SUCCESS, data})

const loadCategoriesLoading = (loading) => ({type: types.LOAD_CATEGORIES_LOADING, categoryIsLoading:loading}); 
const loadCategoriesError = (error) => ({ type: types.LOAD_CATEGORIES_ERROR, categoryHasErrored:error });

// These default values are used as data is being fetched before category is created
const PAGE_DEFAULT = 0;
const SIZE_DEFAULT = 20;
const SORT_DEFAULT = "id,desc";
const SEARCH_DEFAULT = "";

// Use default values if none are specified
export function categoriesFetchData(param, search = SEARCH_DEFAULT, pageNumber = PAGE_DEFAULT,
     size = SIZE_DEFAULT, sortParam = SORT_DEFAULT) {
    // BUILD URL

    const urlParams = `search=${search}&page=${pageNumber}&size=${size}&sort=${sortParam}`;
    //console.log("url param: " + urlParams);
    const url = `${API_URL}/categories/page?${urlParams}`;
    //console.log(url);

    return (dispatch) => {
        dispatch(loadCategoriesLoading(true));

        const request = axios.get(url);
        request
            .then((response) => { //console.log(response)
                if (!response.status == 200) {
                    throw Error(response.statusText);
                }

                dispatch(loadCategoriesLoading(false));

                return response.data;
            })
            .then((data) => dispatch(loadCategoriesSuccess(data)))
            .catch((error) => dispatch(loadCategoriesError(error)));
    };
}


const loadAllCategoriesSuccess = (data) => ({type: types.LOAD_ALL_CATEGORIES_SUCCESS, data})

export function categoriesFetchNames() {

   // BUILD URL
   
   const url = `${API_URL}/categories`;

   return (dispatch) => {
       dispatch(loadCategoriesLoading(true));

       const request = axios.get(url);
       request
           .then((response) => { console.log(response)
               if (!response.status == 200) {
                   throw Error(response.statusText);
               }

               dispatch(loadCategoriesLoading(false));

               return response.data;
           })
           .then((data) => dispatch(loadAllCategoriesSuccess(data)))
           .catch((error) => dispatch(loadCategoriesError(error)));
   };
}

const deleteCategorySuccess = (id) => ({ type: types.DELETE_CATEGORY_SUCCESS, payload: id });
const deleteCategoryLoading = (loading) => ({ type: types.DELETE_CATEGORY_LOADING, payload: loading });
const deleteCategoryError = (error) => ({ type: types.DELETE_CATEGORY_ERROR, payload: error });

export function deleteCategory(id) {
    console.log("delete called, id: " + id);

    return (dispatch) => {
        const request = axios.delete(`${API_URL}/categories/${id}`);
        request
            .then((response) => {
                //console.log(response);
                if (!response.status == 200) {
                    throw Error(response.statusText);
                }
                dispatch(deleteCategorySuccess(id))
            })
            .catch((error) => {
                //console.log(error);
                dispatch(deleteCategoryError(error));
            })
    };
}

const editCategorySuccess = (id, name, description) => ({ type: types.EDIT_CATEGORY_SUCCESS, id: id, name:name, description: description });
const editCategoryLoading = (loading) => ({ type: types.EDIT_CATEGORY_LOADING, payload: loading });
const editCategoryError = (error) => ({ type: types.EDIT_CATEGORY_ERROR, payload: error });

export function editCategoryAction(id, name, description) {
   // console.log("Edit Category called, id: " + id);

    return (dispatch) => {
        const request = axios.put(`${API_URL}/categories/edit/${id}`, {name: name, description: description});
        request
            .then((response) => {
                //console.log(response);
                if (!response.status == 200) {
                    throw Error(response.statusText);
                }
                dispatch(editCategorySuccess(id, name, description))
            })
            .catch((error) => { // Catch the error thrown if status isn't 200
                //console.log(error);
                dispatch(editCategoryError(error));
            })
    };
}

const addCategorySuccess = (id, name, description, count) => ({ type: types.ADD_CATEGORY_SUCCESS, id: id, name: name, description: description, count: count });
const addCategoryLoading = (loading) => ({ type: types.ADD_CATEGORY_LOADING, payload: loading });
const addCategoryError = (error) => ({ type: types.ADD_CATEGORY_ERROR, payload: error });

export function addCategoryAction(name, description){
    
    return(dispatch) => {
       const request = axios.post(`${API_URL}/categories/add`, {name: name, description: description});
       request
        .then(( response) => {
            if (!response.status == 200) {
                throw Error(response.statusText);
            }
            dispatch(addCategorySuccess(response.data.id, response.data.name, response.data.description, 15))//remove hard coded count and replace with server response
        })
        .catch((error) => { // Catch the error thrown if status isn't 200
                dispatch(addCategoryError(error));
            })
    };
}



