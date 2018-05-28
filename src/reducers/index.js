import { combineReducers } from 'redux';
import vendors from './vendorReducer';

const rootReducer = combineReducers({
    vendors:vendors
});

export default rootReducer;