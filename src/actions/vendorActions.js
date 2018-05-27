import * as types from './actionTypes';

export function loadVendorsSuccess(vendors) {
    return {
        type: types.LOAD_VENDORS_SUCCESS,
        vendors
    }
}

export function loadVendors() {
    return function (dispatch) {
        // get data from external data source
    }
}