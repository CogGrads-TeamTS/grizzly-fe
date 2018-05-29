import * as types from '../actions/actionTypes';

import _ from 'lodash';

export function category(state = [], action) { 
    console.log(action.type);
    switch (action.type) {
        case types.LOAD_CATEGORIES_SUCCESS:
            return action.categories
        case types.DELETE_CATEGORY_SUCCESS:
            // creates a new state that has the deleted category removed 
            return _.remove(state, (cat) => cat.id != action.payload);
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

