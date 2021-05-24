import React from 'react';
import ReactDom from 'react-dom';
// import ReactMapGL from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// mapboxgl
mapboxgl.accessToken = 'pk.eyJ1IjoiaXM5NHJlYWwxMyIsImEiOiJja3AyemR5NnMwMDNxMnZwYzRqOWZ3YjBtIn0.3_R4gBCcmuHZdEfWYt3LCw';

// sample data of the subway stations in new york
// array of data
// items are objects
// in each object: location, city, state, and coordinates all string values EXCEPT coordinates


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

        // map.fitBounds([ -29.7604, 95.3698 ])

        let marker = new mapboxgl.Marker() // mapboxgl
        // .setLngLat([-36.2048,138.2529])

    };

    render(){


        return(

            <div>
                <div ref={ el => this.mapContainer = el } style={{width: '100%', height: '100vh'}}> </div>
                {/* <ReactMapGL {...this.state} /> */}

            </div>

        );
    };

};