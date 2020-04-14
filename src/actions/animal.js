import {constant} from 'lodash';

export const FETCH_ANIMALS_REQUESTED = 'FETCH_ANIMALS_REQUESTED'; // Accion | Action
export const FETCH_ANIMALS_SUCCEEDED = 'FETCH_ANIMALS_SUCCEEDED'; // Accion | Action
export const SORT_ANIMAL = 'SORT_ANIMAL';

export const fetchAnimalsRequested = filter => ({type: FETCH_ANIMALS_REQUESTED, filter}) // Disparador o Action Creator
export const fetchAnimalsSucceeded = (animals, limit, total) => ({
    type: FETCH_ANIMALS_SUCCEEDED,
    animals, limit, total
}) // Disparador o Action Creator
export const sortAnimal = sort => ({type: SORT_ANIMAL, sort});

export const FETCH_ANIMAL_REQUESTED = 'FETCH_ANIMAL_REQUESTED'; // Accion | Action
export const FETCH_ANIMAL_SUCCEEDED = 'FETCH_ANIMAL_SUCCEEDED'; // Accion | Action
export const SUBMIT_ANIMAL_REQUESTED = 'SUBMIT_ANIMAL_REQUESTED';
export const SUBMIT_ANIMAL_SUCCEEDED = 'SUBMIT_ANIMAL_SUCCEEDED';
export const UPDATE_ANIMAL_DATA = 'UPDATE_ANIMAL_DATA'; 
export const DELETE_ANIMAL_REQUESTED = 'DELETE_ANIMAL_REQUESTED';
export const DELETE_ANIMAL_SUCCEEDED = 'DELETE_ANIMAL_SUCCEEDED';

export const fetchAnimalRequested = id => ({type: FETCH_ANIMAL_REQUESTED, id}) // Disparador o Action Creator
export const fetchAnimalSucceeded = animal => ({
    type: FETCH_ANIMAL_SUCCEEDED,
    animal
}) // Disparador o Action Creator
export const updateAnimalData = animal => ({type: UPDATE_ANIMAL_DATA, animal}); // Trigger
export const submitAnimalRequested = props => ({type: SUBMIT_ANIMAL_REQUESTED, props});
export const submitAnimalSucceded = constant({type: SUBMIT_ANIMAL_SUCCEEDED});
export const deleteAnimalRequested = id => ({type: DELETE_ANIMAL_REQUESTED, id});
export const deleteAnimalSucceeded = constant({type: DELETE_ANIMAL_SUCCEEDED});
