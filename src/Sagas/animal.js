import {
    call,
    put,
    delay
} from 'redux-saga/effects';

import AnimalAPI from '../Api/animal';
import {
    fetchAnimalsSucceeded
} from '../actions/animal';

export function* fetchAnimals({filter}) {
    try {
        const {animals, limit, total} = yield call(
            AnimalAPI.fetch,
            filter
        );
        yield delay(1500);
        yield put(
            fetchAnimalsSucceeded(animals, limit, total)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}