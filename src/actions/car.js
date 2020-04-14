export const FETCH_CARS_REQUESTED = 'FETCH_CARS_REQUESTED'; // Accion | Action
export const FETCH_CARS_SUCCEEDED = 'FETCH_CARS_SUCCEEDED'; // Accion | Action
export const CREATE_CAR = 'CREATE_CARS'; // Accion | Action
export const SORT_CAR = 'SORT_CAR';

export const fetchCarsRequested = filter => ({type: FETCH_CARS_REQUESTED, filter}) // Disparador o Action Creator
export const fetchCarsSucceeded = (cars, limit, total) => ({
    type: FETCH_CARS_SUCCEEDED,
    cars, limit, total
}); // Disparador o Action Creator
export const createCars = post => ({type: CREATE_CAR, post})
export const sortCar = sort => ({type: SORT_CAR, sort});