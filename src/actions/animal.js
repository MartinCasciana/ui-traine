export const FETCH_ANIMALS_REQUESTED = 'FETCH_ANIMALS_REQUESTED'; // Accion | Action
export const FETCH_ANIMALS_SUCCEEDED = 'FETCH_ANIMALS_SUCCEEDED'; // Accion | Action

export const fetchAnimalsRequested = filter => ({type: FETCH_ANIMALS_REQUESTED, filter}) // Disparador o Action Creator
export const fetchAnimalsSucceeded = (animals, limit, total) => ({
    type: FETCH_ANIMALS_SUCCEEDED,
    animals, limit, total
}) // Disparador o Action Creator

export const SORT_ANIMAL = 'SORT_ANIMAL';
export const sortAnimal = sort => ({type: SORT_ANIMAL, sort});