import * as types from './actionTypes';

import axios from 'axios'

const API_URL = 'http://ts.ausgrads.academy:8080';
const loadCategoriesSuccess = (data) => ({type: types.LOAD_CATEGORIES_SUCCESS, data})
const loadCategoriesLoading = (loading) => ({type: types.LOAD_CATEGORIES_LOADING, categoryIsLoading:loading}); 
const loadCategoriesError = (error) => ({ type: types.LOAD_CATEGORIES_ERROR, categoryHasErrored:error });

const FIRST_PAGE = 0;
const DEFAULT_PAGE_SIZE = 20;
const NO_PARAM = "";

// export function sortCategory(sortParam) {
//     return (dispatch) => {
//         dispatch(sortCategoryChange(sortParam));
//         // dispatch(categoriesFetchData(sortParam));
//     }
// }

// Use default values if none are specified
export function categoriesFetchData(pageNumber = FIRST_PAGE, size = DEFAULT_PAGE_SIZE, sortParam = NO_PARAM) {

    // BUILD URL
    const urlParams = `search=&page=${pageNumber}&size=${size}&sort=${sortParam}`
    console.log("url param: " + urlParams)
    const url = `${API_URL}/categories/page?${urlParams}`;
    console.log(url);

    return (dispatch) => {
        dispatch(loadCategoriesLoading(true));

        const request = axios.get(url);
        request
            .then((response) => {
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

const deleteCategorySuccess = (id) => ({ type: types.DELETE_CATEGORY_SUCCESS, payload: id });
const deleteCategoryLoading = (loading) => ({ type: types.DELETE_CATEGORY_LOADING, payload: loading });
const deleteCategoryError = (error) => ({ type: types.DELETE_CATEGORY_ERROR, payload: error });

export function deleteCategory(id) {
    console.log("delete called, id: " + id);

    return (dispatch) => {
        const request = axios.delete(`${API_URL}/categories/${id}`);
        request
            .then((response) => {
                console.log(response);
                if (!response.status == 200) {
                    throw Error(response.statusText);
                }
                dispatch(deleteCategorySuccess(id))
            })
            .catch((error) => {
                console.log(error);
                dispatch(deleteCategoryError(error));
            })
    };
}

const editCategorySuccess = (id, name, description) => ({ type: types.EDIT_CATEGORY_SUCCESS, id: id, name:name, description: description });
const editCategoryLoading = (loading) => ({ type: types.EDIT_CATEGORY_LOADING, payload: loading });
const editCategoryError = (error) => ({ type: types.EDIT_CATEGORY_ERROR, payload: error });

export function editCategoryAction(id, name, description) {
    console.log("Edit Category called, id: " + id);

    return (dispatch) => {
        const request = axios.put(`${API_URL}/categories/edit/${id}`, {name: name, description: description});
        request
            .then((response) => {
                console.log(response);
                if (!response.status == 200) {
                    throw Error(response.statusText);
                }
                dispatch(editCategorySuccess(id, name, description))
            })
            .catch((error) => { // Catch the error thrown if status isn't 200
                console.log(error);
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



