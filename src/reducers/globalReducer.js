import * as types from '../actions/actionTypes'

export function global(state = {}, action){
    switch (action.type){
        case types.LOAD_GLOBAL_SUCCESS:
            const search = action.data.search;
            delete action.data.search;
            console.log(action.data)
            console.log(search)
            return {
                ...state,
                results: action.data,
                search: search
            };

        default:
            return state;
    }
}

export function globalIsLoading(state = false, action) {
    switch (action.type) {
        case types.LOAD_GLOBAL_LOADING:
            return action.globalIsLoading
        default:
            return state
    }
}

export function globalHasErrored(state = false, action) {
    switch (action.type) {
        case types.LOAD_GLOBAL_ERROR:
            return action.globalHasErrored
        default:
            return state
    }
}