import React, { Component } from 'react';
// styles
import './planet-detailes.scss';
//Img
import planet from './img/planet.jpg';

class PlanetDetailes extends Component{
    render(){
        return(
            <div className="planet-container">
                <div className="planet-img">
                    <img src={planet} alt="planet"/>
                </div>
                <div className="planet-info">
                    <div className="pnanet-name">Planet Name</div>
                    <div className="population">Population 1221132</div>
                    <div className="raotation-period">Rotation Period: 43</div>
                    <div className="diameter">Diameter: 100</div>
                </div>
            </div>
        )
    }
}


export default PlanetDetailes;