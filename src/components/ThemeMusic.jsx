import React, { Component } from 'react';

class ThemeMusic extends Component {

    componentDidMount() {
        const themeSong = document.getElementById('themeSong');
        setTimeout(()=>{
            themeSong.play();
        },5000)
    }

    render() {
        return(
            <audio id="themeSong" src="https://www.thesoundarchive.com/starwars/star-wars-theme-song.mp3"></audio>
        )
    }
}

export default ThemeMusic;
