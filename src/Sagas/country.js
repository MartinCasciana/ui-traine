import {
    call, //<<< LLama y ejecuta
    put, // <<< Alamena en nuestro redux
    select, // <<< Nos permite tomar dato de nuestro store "state (redux)"
    delay // <<< un timeout nos da un tiempo de espera
} from 'redux-saga/effects';

import CountryAPI from '../Api/country';
import {
    fetchCountriesSucceeded,
    fetchCountrySucceeded,
    submitCountrySucceded,
    deleteCountrySucceeded
} from '../actions/country';

export function* fetchCountries({filter}) {
    try {
        // const filters = yield select(state => state.cars.documents.filters);
        const {countries, limit, total} = yield call(
            CountryAPI.fetch,
            filter
        );
        yield delay(500);
        yield put(
            fetchCountriesSucceeded(countries, limit, total)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}

export function* getCountry({id}) {
    try {
        const {country} = yield call(
            CountryAPI.getOne,
            id
        );
        yield delay(500);
        yield put(
            fetchCountrySucceeded(country)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}

export function* saveCountry() {
    try {
        const {country} = yield select(state => state.country.documents)
        const status = yield call(
            CountryAPI.save,
            country // Si tiene id es un put, Si no tiene caso nuevo es post
        );
        yield delay(500);
        yield put(
            submitCountrySucceded(status)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}

export function* deleteCountry({id}) {
    try {
        const status = yield call(
            CountryAPI.delete,
            id
        );
        /**
         * @todo
         * check why this is failing. filter should be inside reducers so we can re take it on a call
         */
        // yield call(fetchCars);
        yield delay(500);
        yield put(
            deleteCountrySucceeded(status)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}