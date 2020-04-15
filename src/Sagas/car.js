import {
    call, //<<< LLama y ejecuta
    put, // <<< Alamena en nuestro redux
    select, // <<< Nos permite tomar dato de nuestro store "state (redux)"
    delay // <<< un timeout nos da un tiempo de espera
} from 'redux-saga/effects';

import CarAPI from '../Api/car';
import {
    fetchCarsSucceeded,
    fetchCarSucceeded,
    submitCarSucceded,
    deleteCarSucceeded
} from '../actions/car';

export function* fetchCars({filter}) {
    try {
        // const filters = yield select(state => state.cars.documents.filters);
        const {cars, limit, total} = yield call(
            CarAPI.fetch,
            filter
        );
        yield delay(500);
        yield put(
            fetchCarsSucceeded(cars, limit, total)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}

export function* getCar({id}) {
    try {
        const {car} = yield call(
            CarAPI.getOne,
            id
        );
        yield delay(500);
        yield put(
            fetchCarSucceeded(car)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}

export function* saveCar() {
    try {
        const {car} = yield select(state => state.car.documents)
        const status = yield call(
            CarAPI.save,
            car // Si tiene id es un put, Si no tiene caso nuevo es post
        );
        yield delay(500);
        yield put(
            submitCarSucceded(status)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}

export function* deleteCar({id}) {
    try {
        const status = yield call(
            CarAPI.delete,
            id
        );
        /**
         * @todo
         * check why this is failing. filter should be inside reducers so we can re take it on a call
         */
        // yield call(fetchCars);
        yield delay(500);
        yield put(
            deleteCarSucceeded(status)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}