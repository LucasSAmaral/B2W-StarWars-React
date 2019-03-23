import React, { Component } from 'react';
import ImageLogo from './components/ImageLogo';
import MenuButtons from './components/MenuButtons';
import ThemeMusic from './components/ThemeMusic';
import ALongTimeAgo from './components/ALongTimeAgo';
import './scss/Style.scss';

class App extends Component {

  renderIntro(){
    let screenWidth = window.innerWidth;
    if(screenWidth >= 1024){
      return(
        <div>
          <ThemeMusic />
          <ALongTimeAgo />
        </div>
      )
    }
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
            <ImageLogo />
            <MenuButtons />
            {this.renderIntro()}
        </div>
      </div>
    );
  }
}

export default App
