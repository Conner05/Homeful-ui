import reqwest from 'reqwest';
import {CAMP_LIST_ENDPOINT} from '~/configuration';
import {getAddNeedForm} from '~/state/selectors';
import {LOAD_CAMP_LIST} from '~/state/reducers/campList';

// actions
let loadCampListActionCreator = (data) => ({type: LOAD_CAMP_LIST, data});

// thunks
export let ajaxFetchCampList = (dispatch) => {
  let loadCampListFromJson = async () => {
    try {
      let campList = JSON.parse(await reqwest(CAMP_LIST_ENDPOINT));
      return dispatch(loadCampListActionCreator(campList));
    } catch (err) {
      throw new Error(err);
    }
  };

  return loadCampListFromJson();
};

export let addNeed = (dispatch, getState) => {
  let state = getState();
  let serializedForm = getAddNeedForm(state);

  let performRequest = async () => {
    let response = await reqwest(serializedForm);
    console.log(response);
  };

  performRequest();
};
