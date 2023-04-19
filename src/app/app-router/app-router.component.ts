import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContentList from './ContentList';
import ContentDetails from './ContentDetails';
import * as path from "path";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ContentList} />
<Route exact path="/list" component={ContentList} />
<Route path="/content/:id" component={ContentDetails} />
</Switch>
</BrowserRouter>
);

export default AppRouter;
