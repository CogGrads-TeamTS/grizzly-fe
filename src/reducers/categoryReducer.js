import * as types from '../actions/actionTypes';

import _ from 'lodash';

export function category(state = {}, action) { 
    console.log(action.type);
    switch (action.type) {
        case types.LOAD_CATEGORIES_SUCCESS:
            return _.mapKeys(action.categories, "id")

        case types.DELETE_CATEGORY_SUCCESS:
            // creates a new state that has the deleted category removed 
            return _.omit(state, action.payload);
            
        case types.EDIT_CATEGORY_SUCCESS:
            const clone = _.cloneDeep(state) // Create a copy of state

            // Return the updated cloned state
            return _.update(clone, `${action.id}`, (cat) => {return {id:action.id, name: action.name, description: action.description, count: cat.count}});
        
        case types.ADD_CATEGORY_SUCCESS:

            return{
                ...state, [action.id]: {id: action.id, name: action.name, description: action.description, count: action.count}
            }

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