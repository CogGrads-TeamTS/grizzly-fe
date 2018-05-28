import { combineReducers } from 'redux';
import vendors from './vendorReducer';
import { category, categoryHasErrored, categoryIsLoading } from './categoryReducer';

const rootReducer = combineReducers({
    vendors,
    category:category,
    categoryHasErrored:category.categoryHasErrored,
    categoryIsLoading:category.categoryIsLoading

});

export default rootReducer;
