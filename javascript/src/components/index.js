import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Link, Switch, withRouter, Redirect} from 'react-router-dom';
import {SamplePage} from "./pages/SamplePage";

export class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Switch>
              <Route exact path="/" component={props => <SamplePage {...props}/>}/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

const AppRouter = withRouter(App);

export class RoutedApp extends Component {
  render() {
    return (
      <Router basename={"/"}>
        <AppRouter {...this.props}/>
      </Router>
    );
  }
}