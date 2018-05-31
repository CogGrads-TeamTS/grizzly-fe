import * as types from '../actions/actionTypes';

import _ from 'lodash';

export function categoryFilter(state = {}, action) {
    console.log(action.type);

    const page = 1;

    switch(action.type) {
        case types.SORT_CATEGORY_CHANGE:
            return {...state, ['sort']:action.sortParam};
        default:
            return state;
    }
} 