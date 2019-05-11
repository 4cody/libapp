import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header'
import AddBook from './containers/AddBook'
import Display from './containers/Display'
import Book from './containers/Book'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="Page_Wrapper">
          <div className="App">
            <Header />
            <div className="App_Content">
              <AddBook />
              <Switch>
                <Route exact path="/" component={Display} />
                <Route path="/book" component={Book} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;