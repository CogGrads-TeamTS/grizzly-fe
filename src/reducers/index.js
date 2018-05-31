import { combineReducers } from 'redux';
import vendors from './vendorReducer';
import { category, categoryHasErrored, categoryIsLoading } from './categoryReducer';
import { categoryFilter } from './filterReducer';

const rootReducer = combineReducers({
    vendors,
    category:category,
    categoryHasErrored:categoryHasErrored,
    categoryIsLoading:categoryIsLoading,
    categoryFilter: categoryFilter
});

export default rootReducer;
