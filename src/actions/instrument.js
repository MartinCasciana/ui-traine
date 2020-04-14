import {constant} from 'lodash';

export const FETCH_INSTRUMENTS_REQUESTED = 'FETCH_INSTRUMENTS_REQUESTED'; // Accion | Action
export const FETCH_INSTRUMENTS_SUCCEEDED = 'FETCH_INSTRUMENTS_SUCCEEDED'; // Accion | Action
export const SORT_INSTRUMENT = 'SORT_INSTRUMENT';

export const fetchInstrumentsRequested = filter => ({type: FETCH_INSTRUMENTS_REQUESTED, filter}) // Disparador o Action Creator
export const fetchInstrumentsSucceeded = (instruments, limit, total) => ({
    type: FETCH_INSTRUMENTS_SUCCEEDED,
    instruments, limit, total
}) // Disparador o Action Creator
export const sortInstrument = sort => ({type: SORT_INSTRUMENT, sort});

export const FETCH_INSTRUMENT_REQUESTED = 'FETCH_INSTRUMENT_REQUESTED'; // Accion | Action
export const FETCH_INSTRUMENT_SUCCEEDED = 'FETCH_INSTRUMENT_SUCCEEDED'; // Accion | Action
export const SUBMIT_INSTRUMENT_REQUESTED = 'SUBMIT_INSTRUMENT_REQUESTED';
export const SUBMIT_INSTRUMENT_SUCCEEDED = 'SUBMIT_INSTRUMENT_SUCCEEDED';
export const UPDATE_INSTRUMENT_DATA = 'UPDATE_INSTRUMENT_DATA'; 
export const DELETE_INSTRUMENT_REQUESTED = 'DELETE_INSTRUMENT_REQUESTED';
export const DELETE_INSTRUMENT_SUCCEEDED = 'DELETE_INSTRUMENT_SUCCEEDED';

export const fetchInstrumentRequested = id => ({type: FETCH_INSTRUMENT_REQUESTED, id}) // Disparador o Action Creator
export const fetchInstrumentSucceeded = instrument => ({
    type: FETCH_INSTRUMENT_SUCCEEDED,
    instrument
}) // Disparador o Action Creator
export const updateInstrumentData = instrument => ({type: UPDATE_INSTRUMENT_DATA, instrument}); // Trigger
export const submitInstrumentRequested = props => ({type: SUBMIT_INSTRUMENT_REQUESTED, props});
export const submitInstrumentSucceded = constant({type: SUBMIT_INSTRUMENT_SUCCEEDED});
export const deleteInstrumentRequested = id => ({type: DELETE_INSTRUMENT_REQUESTED, id});
export const deleteInstrumentSucceeded = constant({type: DELETE_INSTRUMENT_SUCCEEDED});
