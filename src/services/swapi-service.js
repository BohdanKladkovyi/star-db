// import React from 'react';
// import ReactDOM from 'react-dom';


class SwapiService {
    _apiBase =  'https://swapi.co/api';
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok){
            throw new Error (`Could not fetch ${url}`+ `, received ${res.status}`)
        }
        return await res.json();
    }

    async getAllPeople(){
        const res = await this.getResource(`/people/`);
        return res.results;
    }
    getPerson(id){
        return this.getResource(`/people/${id}`);
    }
    async getPlanets(){
        return this.getResource(`/planets/`)
      
    }
}

const swapi = new SwapiService();
swapi.getAllPeople().then((people)=>{
    people.forEach(element => {
      console.log(element.name)  
    });
})
// ReactDOM.render(<App />, document.getElementById('root'));
