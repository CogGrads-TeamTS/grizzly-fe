import * as types from '../actions/actionTypes';

export function user(state = {}, action){

    switch (action.type){
        case types.LOAD_USER_SUCCESS:
            return {
                user: action.data
            }
        
        default:
            return state;
    }
}

export function userIsLoading(state = false, action) {
    switch (action.type) {
        case types.LOAD_USER_LOADING:
            return action.userIsLoading
        default:
            return state
    }
}

export function userHasErrored(state = false, action) {
    switch (action.type) {
        case types.LOAD_USER_ERROR:
            return action.userHasErrored
        default:
            return state
    }
}