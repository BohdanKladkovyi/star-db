import React, { Component } from 'react'
//Styles
import './person-detailes.scss';
import SwapiService from '../../services/swapi-service';


class PersonDetailes extends Component{

    swapiService = new SwapiService();

    state={
       
        personName: null,
        gender: null,
        eyeColor:null
    }

    updatePerson = () => {
      
        
    }

    render(){
        return(
            <div className="person-detailes-container">
                <img src="https://starwars-visualguide.com/assets/img/characters/3.jpg" alt="person-detail"/>
                <div className="info-person">
                <div className="name">
                    <span>R2-D2</span>  
                    <hr/>  
                </div>
               
                <div className="gender">
                    <span>Gender: </span>
                    <span>n/a</span>
                    <hr/>
                </div>
                <div className="eye-color">
                    <span>Eye color: </span>
                    <span>red</span>
                    <hr/>
                </div>
                </div>
            </div>
        )
    }
}

export default PersonDetailes;