import {
    call,
    put,
    delay
} from 'redux-saga/effects';

import CarAPI from '../Api/car';
import {
    fetchCarsSucceeded
} from '../actions/car';

export function* fetchCars({filter}) {
    try {
        const {cars, limit, total} = yield call(
            CarAPI.fetch,
            filter
        );
        yield delay(1500);
        yield put(
            fetchCarsSucceeded(cars, limit, total)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}