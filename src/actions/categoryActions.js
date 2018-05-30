import * as types from './actionTypes';

import axios from 'axios'

const API_URL = 'http://ts.ausgrads.academy:8080';

const loadCategoriesSuccess = (categories) => ({type: types.LOAD_CATEGORIES_SUCCESS, categories})
const loadCategoriesLoading = (loading) => ({type: types.LOAD_CATEGORIES_LOADING, categoryIsLoading:loading}); 
const loadCategoriesError = (bool) => ({type: types.LOAD_CATEGORIES_ERROR, categoryHasErrored:bool});

export function categoriesFetchData() {
    
    return (dispatch) => {
        dispatch(loadCategoriesLoading(true));

        const request = axios.get(`${API_URL}/categories`);
        request
            .then((response) => {
                if (!response.status == 200) {
                    throw Error(response.statusText);
                }

                dispatch(loadCategoriesLoading(false));
                
                return response.data;
            })
            .then((categories) => dispatch(loadCategoriesSuccess(categories)))
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
                dispatch(editCategoryError(error));
            })
    };
}
