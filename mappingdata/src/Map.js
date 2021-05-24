import React from 'react';
import ReactDom from 'react-dom';
import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiaXM5NHJlYWwxMyIsImEiOiJja3AyemR5NnMwMDNxMnZwYzRqOWZ3YjBtIn0.3_R4gBCcmuHZdEfWYt3LCw';

export default class Map extends React.Component{
    
    state = {
        lng: -29.7604,
        lat: 95.3698,
        zoom: 10,
        width: window.innerWidth,
        height: window.innerHeight
    };

    componentDidMount(){

        const map = new mapboxgl.Map({
            container: this.mapContainer, // conatiner ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [this.state.lng,this.state.lat], // Starting Position
            zoom: this.state.zoom 
        })

    };

    render(){


        return(

            <div>
                <div ref={ el => this.mapContainer = el } style={{width: '5000px', height: '250vh'}}>

                </div>

            </div>

        );
    };

};