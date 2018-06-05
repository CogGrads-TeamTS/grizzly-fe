import { combineReducers } from 'redux';
import {vendor,vendorHasErrored,vendorIsLoading} from './vendorReducer';
import { category, categoryHasErrored, categoryIsLoading } from './categoryReducer';

const rootReducer = combineReducers({
    category:category,
    categoryHasErrored:categoryHasErrored,
    categoryIsLoading:categoryIsLoading,
    vendor:vendor,
    vendorHasErrored:vendorHasErrored,
    vendorIsLoading:vendorIsLoading
});

export default rootReducer;
