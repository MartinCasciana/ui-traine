import {
    FETCH_ANIMALS_SUCCEEDED,
    FETCH_ANIMALS_REQUESTED,
    SORT_ANIMAL,
    EDIT_ANIMAL
} from '../../actions/animal';

import orderBy from 'lodash/orderBy'

const initialState = {
    loading: false,
    animals: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ANIMALS_REQUESTED:
            return {...state, loading: true};
        case FETCH_ANIMALS_SUCCEEDED:
            const {animals, limit, total} = action;
            return {...state, loading: false, animals, limit, total};
        case SORT_ANIMAL:
            return {
                ...state,
                loading: false,
                animals: orderBy(state.animals,
                    [action.sort.id],
                    [action.sort.sort]
                )
            };
        default:
            return state;
    }
}