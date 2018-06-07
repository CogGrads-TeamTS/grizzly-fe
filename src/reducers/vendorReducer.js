import * as types from '../actions/actionTypes';

export function vendor(state = [], action) {

    console.log(action);
    switch (action.type) {
        case types.LOAD_VENDORS_SUCCESS:
          //  const vendorArray=action.data.content;
          //  const vendorFirst = action.data.first;
           // const vendorLast = action.data.last;

            // create a new copy of the current state
            return{
                //    ...state,
                //    content: (!vendorFirst ? [ ...state.content, ...vendorArray] : vendorArray),
                //   vendorFirst,
                //  vendorLast
                vendors:action.data
            } ;
        case types.ADD_VENDORS_SUCCESS:
            // create a new state
            const addState = {...state};
            addState.content =
                [
                    {
                        id:action.id,
                        name:action.name,
                        about:action.about,
                        email:action.email,
                        webpage:action.webpage,
                        contact:action.contact,
                        address:action.address,
                        portfolioURL:action.portfolioURL
                    },
                ...addState.content
                ];

            // returns a new state with the added category appended
            return addState;

        default:
            return state
    }
}


export function vendorIsLoading(state = false, action) {
    switch (action.type) {
        case types.LOAD_VENDORS_LOADING:
            return action.vendorIsLoading
        default:
            return state
    }
}

export function vendorHasErrored(state = false, action) {
    switch (action.type) {
        case types.LOAD_VENDORS_ERROR:
            return action.vendorHasErrored
        default:
            return state
    }
}