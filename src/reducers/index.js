import { createStore, combineReducers } from 'redux';
import {vendor,vendorHasErrored,vendorIsLoading} from './vendorReducer';
import { reducer as formReducer } from 'redux-form';
import { category, categoryHasErrored, categoryIsLoading } from './categoryReducer';
import {products, productHasErrored, productIsLoading } from './productReducer';
import {user, userHasErrored, userIsLoading} from './userReducer';
import {global, globalHasErrored, globalIsLoading} from './globalReducer'

const rootReducer = combineReducers({
    category:category,
    categoryHasErrored:categoryHasErrored,
    categoryIsLoading:categoryIsLoading,
    vendor:vendor,
    vendorHasErrored:vendorHasErrored,
    vendorIsLoading:vendorIsLoading,
    products:products,
    productHasErrored:productHasErrored,
    productIsLoading:productIsLoading,
    user: user,
    userHasErrored: userHasErrored,
    userIsLoading: userIsLoading,
    global: global,
    globalHasErrored: globalHasErrored,
    globalIsLoading: globalIsLoading,
    form:formReducer // Used for Redux Form
});

export default rootReducer;
