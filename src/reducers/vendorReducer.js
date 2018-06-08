import * as types from '../actions/actionTypes';
import _ from 'lodash';

export function vendor(state = {}, action) {

    switch (action.type) {
        case types.LOAD_VENDORS_SUCCESS:
          //  const vendorArray=action.data.content;
          //  const vendorFirst = action.data.first;
           // const vendorLast = action.data.last;

            // create a new copy of the current state
            return {
            //    ...state,
            //    content: (!vendorFirst ? [ ...state.content, ...vendorArray] : vendorArray),
             //   vendorFirst,
              //  vendorLast
                content: action.data
            };
        
        case types.EDIT_VENDOR_SUCCESS:
            // create a new state
            const newState = {
                ...state,
                content: [...state.content]
            };

            // find index of category in state
            var indexToEdit = _.findIndex(newState.content, { id: action.payload.id });
            // update the category in the new state using the index.
            newState.content[indexToEdit].name = action.payload.name;
            //newState.content[indexToEdit].description = action.description;

            // return the new state with the updated category
            return newState;

        default:
            return state
    }
}


export function vendorIsLoading(state = false, action) {
    switch (action.type) {
        case types.LOAD_VENDORS_LOADING:
            return action.vendorIsLoading
        default:
            return state
    }
}

export function vendorHasErrored(state = false, action) {
    switch (action.type) {
        case types.LOAD_VENDORS_ERROR:
            return action.vendorHasErrored
        default:
            return state
    }
}