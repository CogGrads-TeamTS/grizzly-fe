import * as types from './actionTypes';

import axios from 'axios'

export function loadCategorySuccess(categories) { 
    return {
        type: types.LOAD_CATEGORIES_SUCCESS,
        categories
    }
}

export function loadCategoriesError(bool) {
    return {
        type: types.LOAD_CATEGORIES_ERROR,
        categoryHasErrored:bool
    }
}

export function loadCategoriesLoading(bool) { 
    return {
        type: types.LOAD_CATEGORIES_LOADING,
        categoryIsLoading:bool
    }
}

export function categoriesFetchData(url) {
    
    return (dispatch) => {
        dispatch(loadCategoriesLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(loadCategoriesLoading(false));
                
                return response;
            })
            .then((response) => response.json())
            .then((categories) => dispatch(loadCategorySuccess(categories)))
            .catch(() => dispatch(loadCategoriesError(true)));
    };
}

const deleteCategorySuccess = (id) => ({ type: types.DELETE_CATEGORY_SUCCESS, payload: id });
const deleteCategoryLoading = (loading) => ({ type: types.DELETE_CATEGORY_LOADING, payload: loading });
const deleteCategoryError = (message) => ({ type: types.DELETE_CATEGORY_ERROR, payload: message });

export function deleteCategory(id) {
    console.log("delete called, id: " + id);

    return (dispatch) => {
        const request = axios.delete(`http://ts.ausgrads.academy:8080/categories/${id}`);
        request
            .then((response) => {
                console.log(response);
                if (!response.status == 200) {
                    throw Error(response.statusText);
                }
                dispatch(deleteCategorySuccess(id))
            })
            .catch((error) => {
                dispatch(deleteCategoryError(error.message));
            })
    };
}
