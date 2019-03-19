import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Buttons extends Component {
    render() {
        return(
            <Link to={this.props.path}>{this.props.text}</Link>
        )
    }
}

export default Buttons;