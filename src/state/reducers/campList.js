import {List} from 'immutable';
import {Camp} from '~/state/records';

// actions
export const LOAD_CAMP_LIST = 'LOAD_CAMP_LIST';
export let loadCampList = (state, data) => {
  let plainToImmutableEntry = (campJSON) => new Camp(campJSON);
  return new List(data.map(plainToImmutableEntry));
};

// reducer
const campList = (state = List(), {type, data}) => {
  switch (type) {
  case LOAD_CAMP_LIST:
    return loadCampList(state, data);
  default:
    return state;
  }
};

export default campList;

// selectors (function of this piece of the state state)
export let getCampList = (state) => state.toJS();
