import React from 'react';

//Componetns
import Header from '../header';
// import ItemList from '../item-list';
import PlanetDetailes from '../planet-detailes';
//Styles
import './app.scss';





const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <PlanetDetailes/>
            {/* <ItemList/> */}
           
        </div>
    )
}

export default App;
