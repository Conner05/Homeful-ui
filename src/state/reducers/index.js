import { combineReducers } from 'redux';
import { reducer as formReducer, formValueSelector } from 'redux-form';
import {FORM_NAMES} from '~/configuration';
import campList, * as fromCampList from './campList';

let rootReducer = combineReducers({
  campList,
  form: formReducer
});

export default rootReducer;

// root selectors (function of entire state)
export let getCampList = (state) => fromCampList.getCampList(state.campList);

export let getAddNeedForm = (state) => {
  let selector = formValueSelector(FORM_NAMES.ADD_CAMP);
  return selector(state, 'Name', 'Latitude', 'Longitude', 'Notes');
};
