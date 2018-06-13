import { createStore, combineReducers } from 'redux';
import {vendor,vendorHasErrored,vendorIsLoading} from './vendorReducer';
import { reducer as formReducer } from 'redux-form';
import { category, categoryHasErrored, categoryIsLoading } from './categoryReducer';
import {product, productHasErrored, productIsLoading } from './productReducer';

const rootReducer = combineReducers({
    category:category,
    categoryHasErrored:categoryHasErrored,
    categoryIsLoading:categoryIsLoading,
    vendor:vendor,
    vendorHasErrored:vendorHasErrored,
    vendorIsLoading:vendorIsLoading,
    products:product,
    productHasErrored:productHasErrored,
    productIsLoading:productIsLoading,
    form:formReducer // Used for Redux Form
});

export default rootReducer;
