import React, { Component } from 'react';
import Buttons from './Buttons';

class MenuButtons extends Component {
    render() {
        return (
            <div className="content__menu hide">
                <Buttons text="Play Game" path="/planets" />
                <Buttons text="About The App" path="/abouttheapp" />
                <Buttons text="About Me" path="/aboutme" />
            </div>
        )
    }
}

export default MenuButtons