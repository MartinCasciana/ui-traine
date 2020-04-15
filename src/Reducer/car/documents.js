import {
    FETCH_CARS_SUCCEEDED,
    FETCH_CARS_REQUESTED,
    SORT_CAR,
    SUBMIT_CAR_REQUESTED,
    SUBMIT_CAR_SUCCEEDED,
    UPDATE_CAR_DATA,
    FETCH_CAR_SUCCEEDED,
    FETCH_CAR_REQUESTED,
    DELETE_CAR_REQUESTED,
    DELETE_CAR_SUCCEEDED
} from '../../actions/car';

import orderBy from 'lodash/orderBy'

const initialState = {
    loading: false,
    cars: [],
    car: {}
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CARS_REQUESTED:
            return {...state, loading: true};
        case FETCH_CARS_SUCCEEDED:
            const {cars, limit, total} = action;
            return {...state, loading: false, cars, limit, total};
        case SORT_CAR:
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
                cars: orderBy(state.cars,
                    [action.sort.id],
                    [action.sort.sort]//----no entiendo action.sort.sort /
                )
            };
        case SUBMIT_CAR_REQUESTED:
            return{
                ...state,
                loading: true
            };
        case SUBMIT_CAR_SUCCEEDED:
            return{
                ...state,
                loading: false
            };
        case UPDATE_CAR_DATA:
            return {...state, car: action.car};
        case FETCH_CAR_SUCCEEDED: 
            return {
                ...state,
                loading: false,
                car: action.car
            };
        case FETCH_CAR_REQUESTED:
            return {
                ...state,
                loading: true,
                car: {}
            };
            case DELETE_CAR_REQUESTED:
                return {
                    ...state,
                    loading: true,
                };   
        case DELETE_CAR_SUCCEEDED:
        return {
             ...state,
            loading: false,
            car: action.car
        };
        default:
            return state;
    }
}