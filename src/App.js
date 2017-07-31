/**
 * Component: App
 * Purpose: Main entry component
 * Properties: None
 **/

import React, { Component } from "react";
import Dashboard from "./Dashboard/Dashboard.js";
import Settings from "./Settings/Settings.js";
import Loading from "./Loading/Loading.js";

import Loadable from "react-loadable";
import { Router, Route, hashHistory } from "react-router";

/**
 * App entry point.
 * @return Main component
 */
const AsyncDashboard = Loadable({
  loader: () => import("./Dashboard/Dashboard.js"),
  loading: Loading
});

class App extends Component {
  /**
   * App entry point.
   * @return Main component
   */
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Dashboard} />
        <Route path="/settings" component={Settings} />
      </Router>
    );
  }
}

// Exports class to Global namespace
export default App;
