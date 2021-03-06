import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
// styles
import './random-planet.scss';

import Spinner from '../spinner';



class RandomPlanet extends Component{

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    };

    componentDidMount(){
        this.updatePlanet();
    }

    // constructor() {
    //     super();
       
    // }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }


    //function for dynamic "get"  random id for planets
    updatePlanet(){  
        const id = Math.floor(Math.random()*18) + 1;
        this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);
    }

    onError = (err) => {

    }
    

    render(){
        const { planet, loading } = this.state; 
        const spinner = loading ? <Spinner/> : null;
        const content = !loading ? <PlanetView planet={planet}/> : null;
        return(
            <div className="planet-container">
                <div className="spinner">
                    {spinner}
                </div>
                    {content}
            </div>
        )
    }
}


export default RandomPlanet;


const PlanetView = ({planet}) => {
    const { id, name, population, rotationPeriod, diameter } = planet; 
    return(
        <React.Fragment>
            <div className="planet-img">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet"/>
                </div>
                <div className="planet-info">
                    <div className="pnanet-name">{name}</div>
                    <div className="population">
                        <span>Population:</span>
                        <span>{population}</span>
                    </div>
                    <div className="raotation-period">
                        <span>Rotation Period:</span>
                        <span>{rotationPeriod}</span>
                    </div>
                    <div className="diameter">
                        <span>Diameter:</span>
                        <span>{diameter}</span>
                    </div>
                </div>
        </React.Fragment>
    )
}