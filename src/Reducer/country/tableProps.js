import find from 'lodash/find';
import {
    SORT_COUNTRY
} from '../../actions/country';

const initialState = {
    columns: [
        'name',
        'code',
        'createdAt',
        'actions'
    ],
    headers: [
        {
            id: 'name',
            label: 'Pais',
            sort: 'desc'
        },
        {
            id: 'code',
            label: 'Codigo',
            sort: 'desc'
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
        case SORT_COUNTRY:
            const sortedOption = find(state.headers, header => header.id === action.sort.id);
            sortedOption.sort = sortedOption.sort === 'desc' ? 'asc' : 'desc';
            return state
        default:
            return state;
    }
}