import { combineReducers } from 'redux';
import filterReducer from './filter_reducer';
import geolocReducer from './geoloc_reducer';

export default combineReducers({
  bounds: filterReducer,
  geolocation: geolocReducer,
});