import React from 'react';

//Componetns
import Header from '../header';
// import ItemList from '../item-list';
// import PlanetDetailes from '../planet-detailes';
import RandomPlanet from '../random-planet';

//Styles
import './app.scss';





const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            
            <RandomPlanet/>
            {/* <PlanetDetailes/> */}
            {/* <ItemList/> */}
           
        </div>
    )
}

export default App;
