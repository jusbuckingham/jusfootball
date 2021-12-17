import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Cards from './Cards';


// Components


class App extends Component {
  render() {
    return (
      <div className="App">
        <Cards />
      </div>
    )
  }
}

export default App; // ES6 syntax for exporting

// functional component -> made out of a function
// class component -> is made out of a class