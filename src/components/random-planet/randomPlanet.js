import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
// styles
import './random-planet.scss';



class RandomPlanet extends Component{

    swapiService = new SwapiService();

    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    updatePlanet(){
        const id = Math.floor(Math.random()*25) + 2;
        this.swapiService.getPlanet(id)
        .then((planet) => {
            this.setState({
                id,
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter
            });
        });
    }

    render(){

       const { id, name, population, rotationPeriod, diameter } = this.state; 

        return(
            <div className="planet-container">
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
            </div>
        )
    }
}


export default RandomPlanet;