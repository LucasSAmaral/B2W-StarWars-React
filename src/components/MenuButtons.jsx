import React, { Component } from 'react';
import Buttons from './Buttons';

class MenuButtons extends Component {
    render() {
        return(
            <div className="content__menu hide">
                <Buttons className="button" text="Play Game" path="/planets" />
                <Buttons className="button" text="About The App" path="/abouttheapp" />
                <Buttons className="button" text="About Me" path="/aboutme" />
            </div>
        )
    }
}

export default MenuButtons;