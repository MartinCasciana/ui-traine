import {createStore, applyMiddleware, compose} from 'redux';
import saga from 'redux-saga';

import reducers from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = saga();

export default (initialState = {}) => {
    const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    const enhancer = composeEnhancer(
        applyMiddleware(sagaMiddleware)
    );
    const store = createStore(reducers, initialState, enhancer);
    sagaMiddleware.run(sagas);
    return store;
};