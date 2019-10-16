import React from 'react';

//Styles
import './header.scss';

const Header = () => {
    return (
        <div className="flex-container">
            <p>Star DB</p>
           <nav>
               <li>StarShip</li>
               <li>People</li>
               <li>Planets</li>
           </nav>
        </div>
    )
}

export default Header;
