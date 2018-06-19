import * as types from '../actions/actionTypes';

import _ from 'lodash';

export function category(state = {}, action) { 
    console.log(action.type);
    switch (action.type) {
        case types.LOAD_CATEGORIES_SUCCESS:
            // create array from fetched data from database
            const catArray = action.data.content;
            const isFirst = action.data.first;
            const last = action.data.last;
            // create a new copy of the current state
            return {
                ...state,
                content: (!isFirst ? [ ...state.content, ...catArray] : catArray),
                isFirst,
                last
            };

            case types.LOAD_ALL_CATEGORIES_SUCCESS:
            // create array from fetched data from database
            const nameArray = action.data.content;
            // create a new copy of the current state
            return {
                ...state,
                names: nameArray
            };
            
        case types.DELETE_CATEGORY_SUCCESS:
            // returns a new state that has the deleted category removed
            return {
                ...state,
                content: state.content.filter(cat => cat.id !== action.payload)
            };
            
        case types.EDIT_CATEGORY_SUCCESS:
            // create a new state
            const newState = {
                ...state,
                content: [...state.content]
            };

            // find index of category in state
            var indexToEdit = _.findIndex(newState.content, { id: action.id });
            // update the category in the new state using the index.
            newState.content[indexToEdit].name = action.name;
            newState.content[indexToEdit].description = action.description;

            // return the new state with the updated category
            return newState;
        
        case types.ADD_CATEGORY_SUCCESS:
            // create a new state
            const addState = {...state};
            addState.content = [{id:action.id,name:action.name,description:action.description,count:action.count}, ...addState.content];
            
            // returns a new state with the added category appended
            return addState;
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