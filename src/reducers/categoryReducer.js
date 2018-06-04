import * as types from '../actions/actionTypes';

import _ from 'lodash';

export function category(state = {}, action) { 
    console.log(action.type);
    switch (action.type) {
        case types.LOAD_CATEGORIES_SUCCESS:
            // create a new copy of the current state
            const loadState = {...state};
            // create array from fetched data from database
            const catArray = action.data.content;
            // get from response if first page
            const isFirst = action.data.first;
            // set the category content of the new state
            loadState.content = (!isFirst ? [ ...state.content, ...catArray] : catArray);
            // set the is first flag of the new state
            loadState.isFirst = isFirst;
            loadState.last = action.data.last;

            // returns a new state with the server data and may append to existing state
            return loadState
            
        case types.DELETE_CATEGORY_SUCCESS:
            // returns a new state that has the deleted category removed
            return state.filter(cat => cat.id !== action.payload);
            
        case types.EDIT_CATEGORY_SUCCESS:
            // create a new state
            const newState = {...state};
            // find index of category in state
            var indexToEdit = _.findIndex(newState.content, { id: action.id });
            console.log(indexToEdit);
            // update the category in the new state using the index.
            newState.content[indexToEdit].name = action.name;
            newState.content[indexToEdit].description = action.description;
            // return the new state with the updated category
            return newState;
        
        case types.ADD_CATEGORY_SUCCESS:
            // create a new state
            const addState = {...state};
            addState.content = [...addState.content, {id:action.id,name:action.name,description:action.description,count:action.count}];
            
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