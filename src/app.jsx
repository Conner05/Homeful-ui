import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import configureStore from '~/state/configureStore';
import Layout from '~/components/Layout';
import HomePage from '~/components/HomePage';
import AddCamp from '~/components/AddCamp';
import AddNeed from '~/components/AddNeed';
import AddPerson from '~/components/AddPerson';
import CampDetail from '~/components/CampDetail';
import CampList from '~/components/CampList';
// import PackingList from '~/components/PackingList';
// import PersonsList from '~/components/PersonsList';

import '~/theme/base.scss';

let appContainer = document.querySelector('.App');
let globalStore = configureStore();

let Root = () => (
  <Provider store={globalStore}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={HomePage} />
        <Route path="camp-list" component={CampList} />
        <Route path="add-camp" component={AddCamp} />
        <Route path="add-need" component={AddNeed} />
        <Route path="add-person" component={AddPerson} />
        <Route path="camp-detail" component={CampDetail} />
        {/* <Route path="packing-list" component={PackingList} /> */}
        {/* <Route path="persons-list" component={PersonsList} /> */}
      </Route>
    </Router>
  </Provider>
);

render(<Root/>, appContainer);
