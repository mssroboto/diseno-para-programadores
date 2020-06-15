import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StyleGuide from './pages/StyleGuide';
import Home from './pages/Home';
import AppContent from './content/app-content'

const ROUTES = {
  home: '/',
  styleguide: '/styleguide'
}

class App extends Component {
  render() {
    const APP_CONTENT = AppContent;

    return (
      <Router>
        <Switch>
          <Route path={ROUTES.styleguide} component={StyleGuide}>
            <StyleGuide content={APP_CONTENT} />
          </Route>
          <Route path={ROUTES.home} component={Home}>
            <Home content={APP_CONTENT} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
