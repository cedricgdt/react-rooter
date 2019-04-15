import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import History from './History';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <div>
              <ul>
                <li><NavLink exact to="/" activeClassName="selected"> Accueil </NavLink></li>
                <li><NavLink to="/notre-histoire" activeClassName="selected"> History </NavLink></li>
              </ul>
            </div>

            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/notre-histoire" component={History} />
              </Switch>
            </div>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;