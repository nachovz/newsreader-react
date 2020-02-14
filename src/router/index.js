import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from 'component/ui/ScrollToTop';
import Header from 'component/ui/Header';
import Footer from "component/ui/Footer";

import Home from 'views/Home';
import PostView from 'views/PostView';

import { HEADER_HEIGHT, SPACING } from 'styles/constants';


export default function MainRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <div style={{ paddingTop: HEADER_HEIGHT + (SPACING*2) }}>
        <Switch>
          <Route path="/:slug">
            <PostView />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}