import React, { Component } from 'react';
import ImageLogo from './components/ImageLogo';
import MenuButtons from './components/MenuButtons';
import './scss/Style.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
            <ImageLogo />
            <MenuButtons />
        </div>
      </div>
    );
  }
}

export default App;
