import {
    FETCH_ANIMALS_SUCCEEDED,
    FETCH_ANIMALS_REQUESTED,
    SORT_ANIMAL,
    SUBMIT_ANIMAL_REQUESTED,
    SUBMIT_ANIMAL_SUCCEEDED,
    UPDATE_ANIMAL_DATA,
    FETCH_ANIMAL_SUCCEEDED,
    FETCH_ANIMAL_REQUESTED,
    DELETE_ANIMAL_REQUESTED,
    DELETE_ANIMAL_SUCCEEDED
} from '../../actions/animal';

import orderBy from 'lodash/orderBy'

const initialState = {
    loading: false,
    animals: [],
    animal: {}
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ANIMALS_REQUESTED:
            return {...state, loading: true};
        case FETCH_ANIMALS_SUCCEEDED:
            const {animals, limit, total} = action;
            return {...state, loading: false, animals, limit, total};
        case SORT_ANIMAL:
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
                animals: orderBy(state.animals,
                    [action.sort.id],
                    [action.sort.sort]//----no entiendo action.sort.sort /
                )
            };
        case SUBMIT_ANIMAL_REQUESTED:
            return{
                ...state,
                loading: true
            };
        case SUBMIT_ANIMAL_SUCCEEDED:
            return{
                ...state,
                loading: false
            };
        case UPDATE_ANIMAL_DATA:
            return {...state, animal: action.animal};
        case FETCH_ANIMAL_SUCCEEDED: 
            return {
                ...state,
                loading: false,
                animal: action.animal
            };
        case FETCH_ANIMAL_REQUESTED:
            return {
                ...state,
                loading: true,
                animal: {}
            };
            case DELETE_ANIMAL_REQUESTED:
                return {
                    ...state,
                    loading: true,
                };   
        case DELETE_ANIMAL_SUCCEEDED:
        return {
             ...state,
            loading: false,
            animal: action.animal
        };
        default:
            return state;
    }
}