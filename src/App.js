import React, { Component } from 'react';

import './framework.scss';
import './App.css';

import Uploader from './components/Uploader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Uploader token={this.props.token} />
      </div>
    );
  }
}

export default App;
