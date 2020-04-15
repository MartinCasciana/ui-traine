import {
    FETCH_INSTRUMENTS_SUCCEEDED,
    FETCH_INSTRUMENTS_REQUESTED,
    SORT_INSTRUMENT,
    SUBMIT_INSTRUMENT_REQUESTED,
    SUBMIT_INSTRUMENT_SUCCEEDED,
    UPDATE_INSTRUMENT_DATA,
    FETCH_INSTRUMENT_SUCCEEDED,
    FETCH_INSTRUMENT_REQUESTED,
    DELETE_INSTRUMENT_REQUESTED,
    DELETE_INSTRUMENT_SUCCEEDED
} from '../../actions/instrument';

import orderBy from 'lodash/orderBy'

const initialState = {
    loading: false,
    instruments: [],
    instrument: {}
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_INSTRUMENTS_REQUESTED:
            return {...state, loading: true};
        case FETCH_INSTRUMENTS_SUCCEEDED:
            const {instruments, limit, total} = action;
            return {...state, loading: false, instruments, limit, total};
        case SORT_INSTRUMENT:
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
                instruments: orderBy(state.instruments,
                    [action.sort.id],
                    [action.sort.sort]//----no entiendo action.sort.sort /
                )
            };
        case SUBMIT_INSTRUMENT_REQUESTED:
            return{
                ...state,
                loading: true
            };
        case SUBMIT_INSTRUMENT_SUCCEEDED:
            return{
                ...state,
                loading: false
            };
        case UPDATE_INSTRUMENT_DATA:
            return {...state, instrument: action.instrument};
        case FETCH_INSTRUMENT_SUCCEEDED: 
            return {
                ...state,
                loading: false,
                instrument: action.instrument
            };
        case FETCH_INSTRUMENT_REQUESTED:
            return {
                ...state,
                loading: true,
                intrument: {}
            };
            case DELETE_INSTRUMENT_REQUESTED:
                return {
                    ...state,
                    loading: true,
                };   
        case DELETE_INSTRUMENT_SUCCEEDED:
        return {
             ...state,
            loading: false,
            instrument: action.instrument
        };
        default:
            return state;
    }
}