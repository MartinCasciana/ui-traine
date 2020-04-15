import {
    call, //<<< LLama y ejecuta
    put, // <<< Alamena en nuestro redux
    select, // <<< Nos permite tomar dato de nuestro store "state (redux)"
    delay // <<< un timeout nos da un tiempo de espera
} from 'redux-saga/effects';

import InstrumentAPI from '../Api/instrument';
import {
    fetchInstrumentsSucceeded,
    fetchInstrumentSucceeded,
    submitInstrumentSucceded,
    deleteInstrumentSucceeded
} from '../actions/instrument';

export function* fetchInstruments({filter}) {
    try {
        // const filters = yield select(state => state.cars.documents.filters);
        const {instruments, limit, total} = yield call(
            InstrumentAPI.fetch,
            filter
        );
        yield delay(500);
        yield put(
            fetchInstrumentsSucceeded(instruments, limit, total)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}

export function* getInstrument({id}) {
    try {
        const {instrument} = yield call(
            InstrumentAPI.getOne,
            id
        );
        yield delay(500);
        yield put(
            fetchInstrumentSucceeded(instrument)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}

export function* saveInstrument() {
    try {
        const {instrument} = yield select(state => state.intrument.documents)
        const status = yield call(
            InstrumentAPI.save,
            instrument // Si tiene id es un put, Si no tiene caso nuevo es post
        );
        yield delay(500);
        yield put(
            submitInstrumentSucceded(status)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}

export function* deleteInstrument({id}) {
    try {
        const status = yield call(
            InstrumentAPI.delete,
            id
        );
        /**
         * @todo
         * check why this is failing. filter should be inside reducers so we can re take it on a call
         */
        // yield call(fetchCars);
        yield delay(500);
        yield put(
            deleteInstrumentSucceeded(status)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}