import React, { Component } from 'react'
import './App.css';


// Components
import Admin from './Admin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Admin />
      </div>
    )
  }
}

export default App; // ES6 syntax for exporting

// functional component -> made out of a function
// class component -> is made out of a class