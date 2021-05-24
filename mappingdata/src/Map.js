import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiaXM5NHJlYWwxMyIsImEiOiJja3AyemR5NnMwMDNxMnZwYzRqOWZ3YjBtIn0.3_R4gBCcmuHZdEfWYt3LCw';

// sample data of the subway stations in new york
// array of data
// items are objects
// in each object: location, city, state, and coordinates all string values EXCEPT coordinates
// in this case I want Pizza Places in Houston, TX

const sampleData = [
    {   
        // Luigi's Pizzeria
        "name": "Luigi's Pizzeria",
        "location": "3700 Almeda Rd , Houston, TX 77004",
        "city": "Houston",
        "state": "Texas",
        "coordinates" : [ -95.37461311580222,29.735477373862995 ]
    },
    {
        // Winner's Pizza
        "name": "Winner's Pizza",
        "location": "7239 Fairbanks North Houston Rd #4, Houston, TX 77040", 
        "city": "Houston",
        "state": "Texas",
        "coordinates" : [ -95.5252,29.8795 ]
    },
    {
        // Pink's Pizza
        "name": "Pink's Pizza",
        "location": "1403 Heights Blvd", 
        "city": "Houston",
        "state": "Texas",
        "coordinates" : [ -95.398246, 29.797021520596502  ]
    }
]

export default class Map extends React.Component{
    
    state = {

        lng: -95.369804,
        lat: 29.760427,
        zoom: 9,
       
    };

    componentDidMount(){

        const map = new mapboxgl.Map({ //new mapboxgl.Map({
            container: this.mapContainer, // conatiner ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [ this.state.lng , this.state.lat ], // Starting Position
            zoom: this.state.zoom 
        })

        sampleData.map( (location) => {
            
             let marker = new mapboxgl.Marker() // note: luigi's Pizzeria coordinates!
                .setLngLat( location.coordinates ) // for now hardcoding to see what is happening
                .setPopup( new mapboxgl.Popup({ offset: 30 }) 
                .setHTML('<h2>' + location.name + '</h2>' + '<h4>' + location.city + '</h4>' + location.location) ) // here we close .setPopup()
                .addTo(map);
        })

       
    };

    render(){


        return(

            <div>
                <div ref={ el => this.mapContainer = el } style={{width: '100%', height: '100vh'}}> </div>
            </div>

        );
    };

};