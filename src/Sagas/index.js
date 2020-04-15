import {
    all,
    takeEvery
} from 'redux-saga/effects';

import {FETCH_COUNTRIES_REQUESTED, FETCH_COUNTRY_REQUESTED, SUBMIT_COUNTRY_REQUESTED, DELETE_COUNTRY_REQUESTED} from '../actions/country';
import {FETCH_CARS_REQUESTED, FETCH_CAR_REQUESTED, SUBMIT_CAR_REQUESTED,DELETE_CAR_REQUESTED} from '../actions/car';
import {FETCH_INSTRUMENTS_REQUESTED, FETCH_INSTRUMENT_REQUESTED, SUBMIT_INSTRUMENT_REQUESTED, DELETE_INSTRUMENT_REQUESTED} from '../actions/instrument';
import {FETCH_ANIMALS_REQUESTED, FETCH_ANIMAL_REQUESTED, SUBMIT_ANIMAL_REQUESTED, DELETE_ANIMAL_REQUESTED} from '../actions/animal';

import {fetchCountries, getCountry, saveCountry, deleteCountry} from './country';
import {fetchCars, getCar, saveCar, deleteCar} from './car';
import {fetchInstruments, getInstrument, saveInstrument, deleteInstrument} from './instrument';
import {fetchAnimals, getAnimal, saveAnimal, deleteAnimal} from './animal';

export default function* root() {
    return yield all([
        takeEvery(FETCH_COUNTRIES_REQUESTED, fetchCountries),
        takeEvery(FETCH_CARS_REQUESTED, fetchCars),
        takeEvery(FETCH_INSTRUMENTS_REQUESTED, fetchInstruments),
        takeEvery(FETCH_ANIMALS_REQUESTED, fetchAnimals),
        takeEvery(FETCH_CAR_REQUESTED, getCar),
        takeEvery(SUBMIT_CAR_REQUESTED, saveCar),
        takeEvery(DELETE_CAR_REQUESTED, deleteCar),
        takeEvery(FETCH_COUNTRY_REQUESTED, getCountry),
        takeEvery(SUBMIT_COUNTRY_REQUESTED, saveCountry),
        takeEvery(DELETE_COUNTRY_REQUESTED, deleteCountry),
        takeEvery(FETCH_INSTRUMENT_REQUESTED, getInstrument),
        takeEvery(SUBMIT_INSTRUMENT_REQUESTED, saveInstrument),
        takeEvery(DELETE_INSTRUMENT_REQUESTED, deleteInstrument),
        takeEvery(FETCH_ANIMAL_REQUESTED, getAnimal),
        takeEvery(SUBMIT_ANIMAL_REQUESTED, saveAnimal),
        takeEvery(DELETE_ANIMAL_REQUESTED, deleteAnimal)
    ])
}