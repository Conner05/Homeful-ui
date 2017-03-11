import moment from 'moment';
import {List} from 'immutable';
import {Location} from '~/state/records';

// actions
export const LOAD_LOCATION_LIST = 'LOAD_LOCATION_LIST';
export let loadLocations = (state, data) => {
  let plainToImmutableEntry = (locationJSON) => new Location(locationJSON);
  return new List(data.map(plainToImmutableEntry));
};

// reducer
const locationList = (state = List(), {type, data}) => {
  switch (type) {
  case LOAD_LOCATION_LIST:
    return loadLocations(state, data);
  default:
    return state;
  }
};

export default locationList;

// selectors (function of this piece of the state state)
export let getLocationList = (state) => state.toJS();