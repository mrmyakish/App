import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import {
  RootPage, IndexPage, AddPage,
  RemovePage, EditPage, SearchPage, HomePage, PokemonListPage
} from 'routes';

export default ({history}) => (
  <Router history={history}>
    <Route path="/" component={RootPage}>
      <IndexRoute component={IndexPage} />
      <Route path="edit" component={EditPage} />
      <Route path="add" component={AddPage} />
      <Route path="remove" component={RemovePage} />
      <Route path="search" component={SearchPage} />
      <Route path="home" component={HomePage} />
      <Route path="pokemon" component={PokemonListPage} />



    </Route>
    <Route path="*" component={() => <div>404!<br /><a href="/">Reset</a></div>} />
  </Router>
);
