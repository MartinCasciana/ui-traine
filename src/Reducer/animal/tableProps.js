import find from 'lodash/find';
import {
    SORT_ANIMAL
} from '../../actions/animal';

const initialState = {
    columns: [
        'animal',
        'scientific_name',
        'gender',
        'createdAt',
        'actions'
    ],
    headers: [
        {
            id: 'animal',
            label: 'Animal',
            sort: 'desc'
        },
        {
            id: 'scientific_name',
            label: 'Nombre Científico',
            sort: 'desc'
        },
        {
            id: 'gender',
            label: 'Genero'
        },
        {
            id: 'createdAt',
            label: 'Creado',
            sort: 'desc'
        },
        {
        id: 'actions',
        label: 'Acciones'
        }
        
    ]
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SORT_ANIMAL:
            const sortedOption = find(state.headers, header => header.id === action.sort.id);
            sortedOption.sort = sortedOption.sort === 'desc' ? 'asc' : 'desc';
            return state
        default:
            return state;
    }
}