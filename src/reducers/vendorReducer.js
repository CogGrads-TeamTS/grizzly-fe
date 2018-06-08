import * as types from '../actions/actionTypes';
import _ from 'lodash';

export function vendor(state = [], action) {

    console.log(action);
    switch (action.type) {
        case types.LOAD_VENDORS_SUCCESS:
            const vendorArray=action.data.content;
            const vendorFirst = action.data.first;
            const vendorLast = action.data.last;

            // create a new copy of the current state
            return{
                    //...state,
                   // vendors: (!vendorFirst ? [ ...state.content, ...vendorArray] : vendorArray),
                   //vendorFirst,
                //vendorLast
                vendors:action.data
            } ;
        case types.DELETE_VENDORS_SUCCESS:
            // returns a new state that has the deleted category removed
            return {
                ...state,
                content: state.content.filter(vend => vend.id !== action.payload)
            };


        case types.ADD_VENDORS_SUCCESS:
            console.log('vendorreducer');
            // create a new state
            const addState = {...state};
            addState.content =
                [
                    {
                        id:action.id,
                        name:action.name,
                        about:action.about,
                        email:action.email,
                        webpage:action.webpage,
                        contact:action.contact,
                        address:action.address,
                        portfolioURL:action.portfolioURL
                    },
                ...addState.content
                ];

            // returns a new state with the added vendor appended
            return addState;



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