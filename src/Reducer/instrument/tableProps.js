import find from 'lodash/find';
import {
    SORT_INSTRUMENT
} from '../../actions/instrument';

const initialState = {
    columns: [
        'hexcode',
        'family',
        'instrument',
        'createdAt',
        'actions'
    ],
    headers: [
        {
            id: 'excode',
            label: 'Código Hex',
            sort: 'desc'
        },
        {
            id: 'family',
            label: 'Familia',
            sort: 'desc'
        },
        {
            id: 'instrument',
            label: 'Instrumento'
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
        case SORT_INSTRUMENT:
            const sortedOption = find(state.headers, header => header.id === action.sort.id);
            sortedOption.sort = sortedOption.sort === 'desc' ? 'asc' : 'desc';
            return state
        default:
            return state;
    }
}