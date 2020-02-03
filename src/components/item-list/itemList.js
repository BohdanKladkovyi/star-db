import React, { Component } from 'react';

//Services
import SwapiService from '../../services/swapi-service';
// Components
import Spinner from '../spinner';
//Styles
import './item-list.scss';


class ItemList extends Component{

    swapiService = new SwapiService();

    state = {
        peopleList: null
    }
    
    componentDidMount(){
        this.swapiService.getAllPeople()
        .then((peopleList) => {
            this.setState({
                peopleList
            });
        });
    }

    render(){
        const { peopleList } = this.state;

        if(!peopleList) {
            return <Spinner/>
        }
        return(
            <div>
                <ul>
                    <li>
                      
                    </li>
                    <li>
                        fews
                    </li>
                </ul> 
            </div>
        )
    }
}

export default ItemList;