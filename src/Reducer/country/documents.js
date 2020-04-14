import {
    FETCH_COUNTRIES_SUCCEEDED,
    FETCH_COUNTRIES_REQUESTED,
    SORT_COUNTRY,
    //EDIT_COUNTRY,
} from '../../actions/country';

import orderBy from 'lodash/orderBy'
//import edit from 'lodash/edit'

const initialState = {
    loading: false,
    countries: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_COUNTRIES_REQUESTED:
            return {...state, loading: true};
        case FETCH_COUNTRIES_SUCCEEDED:
            const {countries, limit, total} = action;
            return {...state, loading: false, countries, limit, total};
        case SORT_COUNTRY:
            return {
                ...state,
                loading: false,
                countries: orderBy(state.countries,
                    [action.sort.id],
                    [action.sort.sort]
                )
            };
        
        default:
            return state;
    }
}