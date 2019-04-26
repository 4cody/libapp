import React, { Component } from 'react';
import './App.css';
// import Search from './containers/SearchContainer'
import AddBook from './containers/AddBook'
import Display from './containers/Display'


class App extends Component {
  render() {
    return (
      <div>
        <AddBook />
        <Display />
      </div>
    );
  }
}

export default App;