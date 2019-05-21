import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import autoForm from './routes/AutoForm';
import testPrint from './routes/testPrint';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={testPrint} />
        <Route path="/products" exact component={Products} />
        <Route path="/autoform" exact component={autoForm} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
