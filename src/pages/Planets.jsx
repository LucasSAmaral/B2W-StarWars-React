import React, { Component } from 'react';
import Buttons from '../components/Buttons';
import Loading from '../components/Loading';
import axios from 'axios';

class Planets extends Component {

    constructor(loading){
        super(loading);
        this.state = {
            planets: [],
            qtdFilms: 0,
            loading: false
        }
    }

    renderLoading() {
        if(this.state.loading === true) {
            return <Loading />
        } else {
            return null
        }
    }

    changeLoadingState() {
        this.setState((prevState) => {
            return {loading: !prevState.loading}
        });
    }

    randomPlanets() {
        this.changeLoadingState();

        let randomNumber = Math.floor(Math.random() * (61 - 1 + 1)) + 1;

        axios.get(`https://swapi.co/api/planets/${randomNumber}`)
        .then(response => {
            this.setState({planets: response.data, qtdFilms: response.data.films.length})
        })
        .catch(function(error){
            console.log(error);
        });

        setTimeout(()=>{
            this.changeLoadingState();
        }, 1300);
    }

    componentDidMount() {
        this.randomPlanets();
    }

    render(){
        return(
            <div className="planets__container">
                <div className="planets__content">
                    {this.renderLoading()}
                    <div>
                        <h1 className="planets__name">{this.state.planets.name}</h1>
                        <p><span>Population:</span> {this.state.planets.population}</p>
                        <p><span>Climate:</span> {this.state.planets.climate}</p>
                        <p><span>Terrain:</span> {this.state.planets.terrain}</p>
                        <p><span>Featured in</span> {this.state.qtdFilms} <span>{this.state.qtdFilms <= 1 ? 'film': 'films'}</span></p>
                    </div>
                </div>
                <div className="planets__buttons">
                        <button onClick={()=>this.randomPlanets()} className="button">Next</button>
                        <Buttons text="Home" path="/" />
                        <Buttons text="About Me" path="/aboutme"/>
                </div>
            </div>
        )
    }
}

export default Planets