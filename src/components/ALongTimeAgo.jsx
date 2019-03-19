import React, { Component } from 'react';
import $ from 'jquery';

class ALongTimeAgo extends Component {

    constructor() {
        super();
        this.state = {
            text: 'A long time ago in a galaxy far, far away....',
        }
    }
    
    componentDidMount() {
        let screenWidth = window.innerWidth;
        setTimeout(()=>{
            $('.ALongTimeAgo__container').fadeOut(200);
        },5000);
        if(screenWidth >= 1024) {
            setTimeout(()=>{
                $('.app__logo').removeClass('big');
            },8000);
        }
        setTimeout(()=>{
            $('.content__menu').removeClass('hide');
        },9000);
    }

    render() {
        return(
            <div className="ALongTimeAgo__container">
                <div className="ALongTimeAgo__background">
                    <div className="ALongTimeAgo__text">
                        {this.state.text}
                    </div>
                </div>
            </div>
        )
    }
}

export default ALongTimeAgo;