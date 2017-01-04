import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import {
  RootPage, IndexPage, SearchPage, PokemonListPage, PikaPage
} from 'routes';
console.log(PikaPage);
export default ({history}) => (
  <Router history={history}>
    <Route path="/" component={RootPage}>
      <IndexRoute component={IndexPage} />
      <Route path="search" component={SearchPage} />
      <Route path="pokemon" component={PokemonListPage} />
      <Route path="pika" component={PikaPage} />
    </Route>
    <Route path="*" component={() => <div>404!<br /><a href="/">Reset</a></div>} />
  </Router>
);
