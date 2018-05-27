import * as types from '../actions/actionTypes';

const initialState = {
    events: [],
    // loading: false
    // error: null
};

export default function eventReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_VENDORS_SUCCESS:
            return action.events
        default:
            return state
    }
}