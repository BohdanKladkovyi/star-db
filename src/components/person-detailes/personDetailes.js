import React, { Component } from 'react'
//Styles
import './person-detailes.scss';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';


class PersonDetailes extends Component{

    swapiService = new SwapiService();

    state = { 
        person: {},
        loading: true
    }

    constructor() {
        super();
        this.updatePerson();
    }

    updatePerson(){
        const id = Math.floor(Math.random()*8) + 2;
        this.swapiService.getPerson(id)
        .then(this.onPersonLoaded)
        // .catch(this.o)
    }

   onPersonLoaded = (person) => {
      this.setState({
          person,
          loading: false
      })
        
    }



    render(){

        const { person, loading } = this.state;
        const spinner = loading ? <Spinner/> : null;
        const personContent = !loading ? <PersonView person={person}/> : null; 
        return(
            <div className="person-detailes-container">
                {spinner}
                {personContent}
            </div>
        )
    }
}

export default PersonDetailes;


const PersonView = ({person}) => {
    const { id, name, gender, eyeColor } = person;

    return (
        <React.Fragment>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="person-detail"/>
                <div className="info-person">
                <div className="name">
                    <span>{name}</span>  
                    <hr/>  
                </div>
               
                <div className="gender">
                    <span>Gender: </span>
                    <span>{gender}</span>
                    <hr/>
                </div>
                <div className="eye-color">
                    <span>Eye color: </span>
                    <span>{eyeColor}</span>
                    <hr/>
                </div>
                </div>
        </React.Fragment>

    )
}