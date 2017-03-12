import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import configureStore from '~/state/configureStore';

import Layout from '~/components/Layout';
import AddCampForm from '~/components/AddCampForm';
import CampDetail from '~/components/CampDetail';
import CampList from '~/components/CampList';

import '~/theme/base.scss';

let appContainer = document.querySelector('.App');
let globalStore = configureStore();

let Root = () => (
  <Provider store={globalStore}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={CampList} />
        <Route path="add-camp" component={AddCampForm} />
        <Route path="camp-detail" component={CampDetail} />
      </Route>
    </Router>
  </Provider>
);

render(<Root/>, appContainer);
