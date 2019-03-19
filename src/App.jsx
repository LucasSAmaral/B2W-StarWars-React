import React, { Component } from 'react';
import ImageLogo from './components/ImageLogo';
import './scss/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
            <ImageLogo />
        </div>
      </div>
    );
  }
}

export default App;
