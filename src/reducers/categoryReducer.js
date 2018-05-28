import * as types from '../actions/actionTypes';

export function category(state = [], action) {
    switch (action.type) {
        case types.LOAD_CATEGORIES_SUCCESS:
            console.log(state);
            return action.categories
        default:
            return state
    }
}

export function categoryIsLoading(state = false, action) {
    switch (action.type) {
        case types.LOAD_CATEGORIES_LOADING:
            return action.categoryIsLoading
        default:
            return state
    }
}

export function categoryHasErrored(state = false, action) {
    switch (action.type) {
        case types.LOAD_CATEGORIES_ERROR:
            return action.categoryHasErrored
        default:
            return state
    }
}

