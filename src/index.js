import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/app';



const Swapi = () =>{
    return(
        <div>
            <App/>
        </div>
    )
}

ReactDOM.render(<Swapi/>, document.getElementById('root'));