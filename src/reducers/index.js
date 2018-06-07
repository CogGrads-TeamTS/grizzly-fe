import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import vendors from './vendorReducer';
import { category, categoryHasErrored, categoryIsLoading } from './categoryReducer';

const rootReducer = combineReducers({
    vendors,
    category:category,
    categoryHasErrored:categoryHasErrored,
    categoryIsLoading:categoryIsLoading,
    form:formReducer // Used for Redux Form
});

export default rootReducer;
