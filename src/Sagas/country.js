import {
    call,
    put,
    delay
} from 'redux-saga/effects';

import CountryAPI from '../Api/country';
import {
    fetchCountriesSucceeded
} from '../actions/country';

export function* fetchCountries({filter}) {
    try {
        const {countries, limit, total} = yield call(
            CountryAPI.fetch,
            filter
        );
        yield delay(1500);
        yield put(
            fetchCountriesSucceeded(countries, limit, total)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}