import * as types from '../actions/actionTypes';

import _ from 'lodash';

export function category(state = [], action) { 
    console.log(action.type);
    switch (action.type) {
        case types.LOAD_CATEGORIES_SUCCESS:
            const catArray = action.data.content;
            const isFirst = action.data.first;
            // returns a new state with the server data and may append to existing state
            return (!isFirst ? [ ...state, ...catArray] : catArray);
            
        case types.DELETE_CATEGORY_SUCCESS:
            // returns a new state that has the deleted category removed
            return state.filter(cat => cat.id !== action.payload);
            
        case types.EDIT_CATEGORY_SUCCESS:
            // find index of category in state
            var indexToEdit = _.findIndex(state, { id: action.id });
            // create a new state
            const newState = [...state];
            // update the category in the new state using the index.
            newState[indexToEdit].name = action.name;
            newState[indexToEdit].description = action.description;
            // return the new state with the updated category
            return newState;
        
        case types.ADD_CATEGORY_SUCCESS:
            // returns a new state with the added category appended
            return [...state, {id:action.id,name:action.name,description:action.description,count:action.count}];
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
