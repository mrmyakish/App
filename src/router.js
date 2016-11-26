import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import {
  RootPage, IndexPage, AddPage,
  RemovePage, EditPage, SearchPage, HomePage
} from 'routes';

export default ({history}) => (
  <Router history={history}>
    <Route path="https://xviterx.github.io/App/" component={RootPage}>
      <IndexRoute component={IndexPage} />
      <Route path="edit" component={EditPage} />
      <Route path="add" component={AddPage} />
      <Route path="remove" component={RemovePage} />
      <Route path="search" component={SearchPage} />
      <Route path="home" component={HomePage} />


    </Route>
    <Route path="*" component={() => <div>404!<br /><a href=>sfsdfsdfsd home</a></div>} />
  </Router>
);
