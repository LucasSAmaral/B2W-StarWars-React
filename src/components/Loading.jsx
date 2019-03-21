import React, { Component } from 'react';
import img from '../assets/bb-8-loading.gif';

export default class Loading extends Component {
    render(){
        return(
            <div className="loading__container">
                <img src={img} alt="Loading" />
            </div>
        )
    }
}