export const FETCH_INSTRUMENTS_REQUESTED = 'FETCH_INSTRUMENTS_REQUESTED'; // Accion | Action
export const FETCH_INSTRUMENTS_SUCCEEDED = 'FETCH_INSTRUMENTS_SUCCEEDED'; // Accion | Action
export const CREATE_INSTRUMENT = 'CREATE_INSTRUMENTS'; // Accion | Action
export const SORT_INSTRUMENT = 'SORT_INSTRUMNET';

export const fetchInstrumentsRequested = filter => ({type: FETCH_INSTRUMENTS_REQUESTED, filter}) // Disparador o Action Creator
export const fetchInstrumentsSucceeded = (instruments, limit, total) => ({
    type: FETCH_INSTRUMENTS_SUCCEEDED,
    instruments, limit, total
}) // Disparador o Action Creator
export const createInstruments = post => ({type: CREATE_INSTRUMENT, post})
export const sortInstrument = sort => ({type: SORT_INSTRUMENT, sort});