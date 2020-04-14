export const FETCH_COUNTRIES_REQUESTED = 'FETCH_COUNTRIES_REQUESTED'; // Accion | Action
export const FETCH_COUNTRIES_SUCCEEDED = 'FETCH_COUNTRIES_SUCCEEDED'; // Accion | Action
export const CREATE_COUNTRY = 'CREATE_COUNTRIES'; // Accion | Action
export const SORT_COUNTRY = 'SORT_COUNTRY';

export const fetchCountriesRequested = filter => ({type: FETCH_COUNTRIES_REQUESTED, filter}) // Disparador o Action Creator
export const fetchCountriesSucceeded = (countries, limit, total) => ({
    type: FETCH_COUNTRIES_SUCCEEDED,
    countries, limit, total
}); // Disparador o Action Creator
export const createCountries = post => ({type: CREATE_COUNTRY, post})
export const sortCountry = sort => ({type: SORT_COUNTRY, sort});
