import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import StyleGuide from '../pages/StyleGuide';
import Home from '../pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/styleguide" component={StyleGuide}>
            <StyleGuide />
          </Route>
          <Route path="/" component={Home}>
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
