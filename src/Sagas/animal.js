import {
    call, //<<< LLama y ejecuta
    put, // <<< Alamena en nuestro redux
    select, // <<< Nos permite tomar dato de nuestro store "state (redux)"
    delay // <<< un timeout nos da un tiempo de espera
} from 'redux-saga/effects';

import AnimalAPI from '../Api/animal';
import {
    fetchAnimalsSucceeded,
    fetchAnimalSucceeded,
    submitAnimalSucceded,
    deleteAnimalSucceeded
} from '../actions/animal';

export function* fetchAnimals({filter}) {
    try {
        // const filters = yield select(state => state.cars.documents.filters);
        const {animals, limit, total} = yield call(
            AnimalAPI.fetch,
            filter
        );
        yield delay(500);
        yield put(
            fetchAnimalsSucceeded(animals, limit, total)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}

export function* getCar({id}) {
    try {
        const {animal} = yield call(
            AnimalAPI.getOne,
            id
        );
        yield delay(500);
        yield put(
            fetchAnimalSucceeded(animal)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}

export function* saveAnimal() {
    try {
        const {animal} = yield select(state => state.animal.documents)
        const status = yield call(
            AnimalAPI.save,
            animal // Si tiene id es un put, Si no tiene caso nuevo es post
        );
        yield delay(500);
        yield put(
            submitAnimalSucceded(status)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}

export function* deleteAnimal({id}) {
    try {
        const status = yield call(
            AnimalAPI.delete,
            id
        );
        /**
         * @todo
         * check why this is failing. filter should be inside reducers so we can re take it on a call
         */
        // yield call(fetchCars);
        yield delay(500);
        yield put(
            deleteAnimalSucceeded(status)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}