import React from 'react';

//Componetns
import Header from '../header';
import PersonDetailes from '../person-detailes';
import ItemList from '../item-list';
// import PlanetDetailes from '../planet-detailes';
import RandomPlanet from '../random-planet';

//Styles
import './app.scss';





const App = () => {
    return (
        
        <div className="wrapper">
            <Header/>
            <div>    
            <RandomPlanet/>
            <PersonDetailes/>
            </div>
            {/* <PlanetDetailes/> */}
            <ItemList/>
           
        </div>
    )
}

export default App;
