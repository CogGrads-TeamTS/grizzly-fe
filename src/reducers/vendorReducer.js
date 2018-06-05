import * as types from '../actions/actionTypes';

export function vendor(state = {}, action) {
    switch (action.type) {
        case types.LOAD_VENDORS_SUCCESS:
            const vendorArray=action.vendors.content;
            const vendorFirst = action.vendors.first;
            const vendorLast = action.vendors.last;

            // create a new copy of the current state
            return {
                ...state,
                content: (!vendorFirst ? [ ...state.content, ...vendorArray] : vendorArray),
                vendorFirst,
                vendorLast
            };
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