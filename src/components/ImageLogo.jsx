import React, { Component } from 'react';
import Logo from '../assets/Star-Wars.png';
class ImageLogo extends Component {
    render() {
        return(
            <img className="app__logo big" src={Logo} alt="Star Wars"/>
        )
    }
}

export default ImageLogo;