import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import './App.css';
import {worldMap} from './places.js'

class MapOne extends Component {
    constructor() {
        super()
        this.state = {
            center: [37.83, 14.33]
        }
    }
    render() {
        return (
            <Map
                center={this.state.center}
                zoom={8}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maxZoom={18}
                />

                <GeoJSON
                    data={testJson()}
                    onEachFeature={onEachFeature}
                />
            </Map>
        );
    }
}
export default MapOne;
const testJson = () => {
    return worldMap
}

const onEachFeature = (feature, layer) => {
    if (feature.properties) {
        let PopupText = [];
        PopupText.push("<b>Name: </b>" + feature.properties['name-it']);
        PopupText.push("<b><br/>Commune: </b>" + feature.properties.comune);
        PopupText.push("<b><br/>Province: </b>" + feature.properties.province);
        layer.bindPopup("<p>" + PopupText.join("") + "</p>");
    }
}

// '$' not defined call to parse geojson
// $.getJSON("./places.geojson",  
//  function(data) {
//     const geojson = <GeoJSON data = {data} onEachFeature = {onEachFeature} />
//     });
