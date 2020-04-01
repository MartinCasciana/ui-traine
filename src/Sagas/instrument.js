import {
    call,
    put,
    delay
} from 'redux-saga/effects';

import InstrumentAPI from '../Api/instrument';
import {
    fetchInstrumentsSucceeded
} from '../actions/instrument';

export function* fetchInstruments({filter}) {
    try {
        const {instruments, limit, total} = yield call(
            InstrumentAPI.fetch,
            filter
        );
        yield delay(1500);
        yield put(
            fetchInstrumentsSucceeded(instruments, limit, total)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}