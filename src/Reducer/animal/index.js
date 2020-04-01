import {combineReducers} from 'redux';

import documents from './documents';
import tableProps from './tableProps';

export default combineReducers({
    documents,
    tableProps
});
