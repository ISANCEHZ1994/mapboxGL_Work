import React from 'react';
import ReactDom from 'react-dom';
import mapboxgl from 'mapbox-gl';

export default class Map extends React.Component{
    
    state = {
        lng: 0,
        lat: 0,
        zoom: 0
    }

    componentDidMount(){
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng,this.state.lat],
            zoom: this.state.zoom
        })
    }

    render(){


        return(

            <div>

            </div>

        );
    };

};