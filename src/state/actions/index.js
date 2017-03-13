import request from 'superagent';
import {CAMP_LIST_ENDPOINT} from '~/configuration';
import {getAddNeedForm} from '~/state/reducers';
import {LOAD_CAMP_LIST} from '~/state/reducers/campList';

// actions
let loadCampListActionCreator = (data) => ({type: LOAD_CAMP_LIST, data});

// thunks
export let ajaxFetchCampList = (dispatch) => {
  let loadCampListFromJson = async () => {
    try {
      let response = await request.get(CAMP_LIST_ENDPOINT);
      let campList = JSON.parse(response.text);
      return dispatch(loadCampListActionCreator(campList));
    } catch (err) {
      throw new Error(err);
    }
  };

  return loadCampListFromJson();
};

export let addCamp = (dispatch, getState) => {
  let state = getState();
  let serializedForm = getAddNeedForm(state);

  let performRequest = async () => {
    let response = await request.post(CAMP_LIST_ENDPOINT).send(serializedForm);
    console.log(response);
  };

  performRequest();
};
