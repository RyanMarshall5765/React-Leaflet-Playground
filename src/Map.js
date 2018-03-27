import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import './App.css';
import {testJson} from './places'

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
                />
            </Map>
        );
    }
}
export default MapOne;

const onEachFeature = (feature, layer) => {
    const popUpContent = [];
    for (const prop in feature.properties){
        popUpContent.push(prop + ': ' + feature.properties[prop])
    }
    layer.bindPopup(popUpContent.join('<br />'))
}
