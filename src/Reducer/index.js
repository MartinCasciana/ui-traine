import {combineReducers} from 'redux';

import car from './car';
import country from './country';
import instrument from './instrument';
import animal from './animal';

export default combineReducers({
    car,
    country,
    instrument,
    animal
})