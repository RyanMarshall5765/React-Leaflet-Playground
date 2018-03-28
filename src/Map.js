import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import './App.css';
import { testJson } from './places'
import L from 'leaflet'

let geojson = testJson();

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
                    data={geojson}
                    onEachFeature={onEachFeature}
                    pointToLayer={pointToLayer}
                />
            </Map>
        );
    }
}
export default MapOne;

const onEachFeature = (feature, layer) => {
    const popUpContent = [];
    for (const prop in feature.properties) {
        if (feature.properties[prop] != null) {
            popUpContent.push(prop + ': ' + feature.properties[prop])
        }
    }
    layer.bindPopup(popUpContent.join('<br />'))
}


const catholicCross = L.icon({
    iconUrl: require('leaflet/dist/images/GenericCross.svg'),
    iconSize: [38, 95], 
});

const russianOrthodoxIcon = L.icon({
    iconUrl: require('leaflet/dist/images/RussianOrthodox.svg'),
    iconSize: [38, 95], 
});

const pointToLayer = (feature, latlng) => {
    if(feature.properties['place-details-order'] === 'Basilian'){
    return L.marker(latlng, {icon:russianOrthodoxIcon}); 
    }
    else{
    return L.marker(latlng, {icon:catholicCross}); 
    }
 }
