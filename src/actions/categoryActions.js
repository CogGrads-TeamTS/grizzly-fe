import * as types from './actionTypes';

export function loadCategorySuccess(categories) { 
    return {
        type: types.LOAD_CATEGORIES_SUCCESS,
        categories
    }
}

export function loadCategoriesError(bool) {
    return {
        type: types.LOAD_CATEGORIES_ERROR,
        hasErrored:bool
    }
}

export function loadCategoriesLoading(bool) {
    return {
        type: types.LOAD_CATEGORIES_LOADING,
        isLoading:bool
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
