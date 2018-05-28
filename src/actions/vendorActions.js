import * as types from './actionTypes';

export function loadVendorsSuccess(vendors) {
    return {
        type: types.LOAD_VENDORS_SUCCESS,
        vendors
    }
}

export function loadVendorsError(bool) {
    return {
        type: types.LOAD_VENDORS_ERROR,
        hasErrored:bool
    }
}

export function loadVendorsLoading(bool) {
    return {
        type: types.LOAD_VENDORS_LOADING,
        isLoading:bool
    }
}

export function loadVendors() {
    return function (dispatch) {
        // get data from external data source
    }
}