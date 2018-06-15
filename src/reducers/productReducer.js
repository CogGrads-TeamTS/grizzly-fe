import * as types from '../actions/actionTypes';
import _ from 'lodash';

export function products(state = {}, action) {
    
    switch (action.type) {
        case types.LOAD_PRODUCT_SUCCESS:
            const productArray = action.data.content;
            const productFirst = action.data.first;
            const productLast = action.data.last;
            const selected = undefined;

            console.log(productArray)

            return {
                    ...state,
                   content: (!productFirst ? [ ...state.content, ...productArray] : productArray),
                   productFirst,
                   productLast,
                   selected
            };

        case types.LOAD_SINGLE_PRODUCT_SUCCESS:
            return {
                selected: action.data
            };
        // case types.DELETE_PRODUCT_SUCCESS:
        //     // returns a new state that has the deleted category removed
        //     return {
        //         ...state,
        //         content: state.content.filter(vend => vend.id !== action.payload)
        //     };

        
        // case types.EDIT_PRODUCT_SUCCESS:
        //     // create a new state
        //     const newState = {
        //         ...state,
        //         content: [...state.content]
        //     };

        //     // find index of category in state
        //     var indexToEdit = _.findIndex(newState.content, { id: action.payload.id });
        //     // update the category in the new state using the index.
        //     newState.content[indexToEdit].name = action.payload.name;
        //     //newState.content[indexToEdit].description = action.description;

        //     // return the new state with the updated category
        //     return newState;

        // case types.ADD_PRODUCT_SUCCESS:
        //     console.log('product Reducer');
        //     // create a new state
        //     const addState = {...state};
        //     addState.content =
        //         [
        //             {
        //                 id:action.id,
        //                 name:action.name,
        //                 description:action.description,
        //                 price:action.price,
        //                 discount:action.discount,
        //                 categories:action.categories,
        //                 images:action.images
        //             },
        //         ...addState.content
        //         ];

        //     // returns a new state with the added product appended
        //     return addState;



        default:
            return state
    }
}


export function productIsLoading(state = false, action) {
    switch (action.type) {
        case types.LOAD_PRODUCT_LOADING:
            return action.productIsLoading
        default:
            return state
    }
}

export function productHasErrored(state = false, action) {
    switch (action.type) {
        case types.LOAD_PRODUCT_ERROR:
            return action.productHasErrored
        // case types.ADD_PRODUCT_ERROR:
        //     console.log(action.payload)
        //     return state
        default:
            return state
    }
}

export function singleProductIsLoading(state = false, action) {
    switch (action.type) {
        case types.LOAD_SINGLE_PRODUCT_LOADING:
            return action.productIsLoading
        default:
            return state
    }
}

export function singleProductHasErrored(state = false, action) {
    switch (action.type) {
        case types.LOAD_SINGLE_PRODUCT_ERROR:
            return action.productHasErrored
        // case types.ADD_PRODUCT_ERROR:
        //     console.log(action.payload)
        //     return state
        default:
            return state
    }
}