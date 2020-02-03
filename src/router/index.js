import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from 'component/ui/Header';

import Home from 'views/Home';
import Post from 'views/Post';

import { HEADER_HEIGHT, SPACING } from 'styles/constants';

export default function MainRouter() {
  return (
    <Router>
      <Header />
      <div style={{ paddingTop: HEADER_HEIGHT + (SPACING*2) }}>
        <Switch>
          <Route path="/:cat/:slug">
            <Post />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}