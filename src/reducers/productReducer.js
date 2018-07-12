import * as types from '../actions/actionTypes';
import _ from 'lodash';

export function products(state = {}, action) {

    switch (action.type) {
        case types.LOAD_PRODUCT_SUCCESS:
            const productArray = action.data.products.content;
            const productFirst = action.data.products.first;
            const productLast = action.data.products.last;
            const selected = undefined;
            const filterByCat = action.data.filterCats;

            return {
                ...state,
                content: (!productFirst ? [ ...state.content, ...productArray] : productArray),
                productFirst,
                last: productLast,
                selected,
                filterByCat
            };

        case types.LOAD_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                selected: action.data
            };

        case types.LOAD_SINGLE_PRODUCT_IMAGE_SUCCESS:
            return {
                ...state,
                images:action.data
            };

        case types.DELETE_PRODUCT_SUCCESS:
            //console.log(action.payload);
            return {
                ...state,
                content: state.content.filter(prod => prod.id !== action.payload)
            };

        
        case types.EDIT_PRODUCT_SUCCESS:
        // create a new state
                const newState = {
                    ...state,
                    content: [...state.content]
                };

            // find index of category in state
            var indexToEdit = _.findIndex(newState.content, { id: action.payload.id });
            // update the category in the new state using the index.
            newState.content[indexToEdit] = action.payload;
            //newState.content[indexToEdit].description = action.description;

            // return the new state with the updated category
            return newState;

        case types.EDIT_PRODUCT_IMAGE_SUCCESS:
                return {
                    ...state
                }

        case types.ADD_PRODUCT_IMAGE_SUCCESS:
            return {
                ...state,
                images: [
                    {
                        name: action.url,
                        sort: action.sort
                    }
                ]
            }

        
        case types.DELETE_PRODUCT_IMAGE_SUCCESS:
            return {
                ...state,
                selected: {
                    images: state.selected.images.filter(image => image.id !== action.payload.id)
                } 
            }



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
            console.log(action.productHasErrored);
            return action.productHasErrored
        case types.ADD_PRODUCT_ERROR:
            console.log(action.payload)
            return action.payload

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

export function singleProductImageIsLoading(state = false, action) {
    switch (action.type) {
        case types.LOAD_SINGLE_PRODUCT_IMAGE_LOADING:
            return action.productIsLoading
        default:
            return state
    }
}

export function singleProductImageHasErrored(state = false, action) {
    switch (action.type) {
        case types.LOAD_SINGLE_PRODUCT_IMAGE_ERROR:
            return action.productHasErrored
        // case types.ADD_PRODUCT_ERROR:
        //     console.log(action.payload)
        //     return state
        default:
            return state
    }
}