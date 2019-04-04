import React, { Component } from 'react';

import './framework.scss';
import logo from './logo.svg';
import './App.css';

import Uploader from './components/Uploader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Uploader />
      </div>
    );
  }
}

export default App;
