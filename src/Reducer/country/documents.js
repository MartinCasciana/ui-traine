import {
    FETCH_COUNTRIES_SUCCEEDED,
    FETCH_COUNTRIES_REQUESTED,
    SORT_COUNTRY,
    SUBMIT_COUNTRY_REQUESTED,
    SUBMIT_COUNTRY_SUCCEEDED,
    UPDATE_COUNTRY_DATA,
    FETCH_COUNTRY_SUCCEEDED,
    FETCH_COUNTRY_REQUESTED,
    DELETE_COUNTRY_REQUESTED,
    DELETE_COUNTRY_SUCCEEDED
} from '../../actions/country';

import orderBy from 'lodash/orderBy'

const initialState = {
    loading: false,
    countries: [],
    country: {}
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_COUNTRIES_REQUESTED:
            return {...state, loading: true};
        case FETCH_COUNTRIES_SUCCEEDED:
            const {countries, limit, total} = action;
            return {...state, loading: false, countries, limit, total};
        case SORT_COUNTRY:
            /*action = {
                    sort: {
                        id: 'foo',
                        sort: 'asc' 
                    }
                }
            }
            const {sort: {id, sort}} = action
                    */
            return {
                ...state,
                loading: false,
                countries: orderBy(state.countries,
                    [action.sort.id],
                    [action.sort.sort]//----no entiendo action.sort.sort /
                )
            };
        case SUBMIT_COUNTRY_REQUESTED:
            return{
                ...state,
                loading: true
            };
        case SUBMIT_COUNTRY_SUCCEEDED:
            return{
                ...state,
                loading: false
            };
        case UPDATE_COUNTRY_DATA:
            return {...state, country: action.country};
        case FETCH_COUNTRY_SUCCEEDED: 
            return {
                ...state,
                loading: false,
                country: action.country
            };
        case FETCH_COUNTRY_REQUESTED:
            return {
                ...state,
                loading: true,
                country: {}
            };
            case DELETE_COUNTRY_REQUESTED:
                return {
                    ...state,
                    loading: true,
                };   
        case DELETE_COUNTRY_SUCCEEDED:
        return {
             ...state,
            loading: false,
            country: action.country
        };
        default:
            return state;
    }
}