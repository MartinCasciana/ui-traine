import {constant} from 'lodash';

export const FETCH_COUNTRIES_REQUESTED = 'FETCH_COUNTRIES_REQUESTED'; // Accion | Action
export const FETCH_COUNTRIES_SUCCEEDED = 'FETCH_COUNTRIES_SUCCEEDED'; // Accion | Action
export const SORT_COUNTRY = 'SORT_COUNTRY';

export const fetchCountriesRequested = filter => ({type: FETCH_COUNTRIES_REQUESTED, filter}) // Disparador o Action Creator
export const fetchCountriesSucceeded = (countries, limit, total) => ({
    type: FETCH_COUNTRIES_SUCCEEDED,
    countries, limit, total
}) // Disparador o Action Creator
export const sortCountry = sort => ({type: SORT_COUNTRY, sort});

export const FETCH_COUNTRY_REQUESTED = 'FETCH_COUNTRY_REQUESTED'; // Accion | Action
export const FETCH_COUNTRY_SUCCEEDED = 'FETCH_COUNTRY_SUCCEEDED'; // Accion | Action
export const SUBMIT_COUNTRY_REQUESTED = 'SUBMIT_COUNTRY_REQUESTED';
export const SUBMIT_COUNTRY_SUCCEEDED = 'SUBMIT_COUNTRY_SUCCEEDED';
export const UPDATE_COUNTRY_DATA = 'UPDATE_COUNTRY_DATA'; 
export const DELETE_COUNTRY_REQUESTED = 'DELETE_COUNTRY_REQUESTED';
export const DELETE_COUNTRY_SUCCEEDED = 'DELETE_COUNTRY_SUCCEEDED';

export const fetchCountryRequested = id => ({type: FETCH_COUNTRY_REQUESTED, id}) // Disparador o Action Creator
export const fetchCountrySucceeded = country => ({
    type: FETCH_COUNTRY_SUCCEEDED,
    country
}) // Disparador o Action Creator
export const updateCountryData = country => ({type: UPDATE_COUNTRY_DATA, country}); // Trigger
export const submitCountryRequested = props => ({type: SUBMIT_COUNTRY_REQUESTED, props});
export const submitCountrySucceded = constant({type: SUBMIT_COUNTRY_SUCCEEDED});
export const deleteCountryRequested = id => ({type: DELETE_COUNTRY_REQUESTED, id});
export const deleteCountrySucceeded = constant({type: DELETE_COUNTRY_SUCCEEDED});
