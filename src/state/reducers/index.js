import { combineReducers } from 'redux';
import campList, * as fromCampList from './campList';

let rootReducer = combineReducers({
  campList
});

export default rootReducer;

// root selectors (function of entire state)
export let getCampList = (state) => fromCampList.getCampList(state.campList);
