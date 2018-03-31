import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet'
import { testJson } from './data/places.js'
import './App.css';

const markers = new L.MarkerClusterGroup();
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
    iconUrl: 'images/GenericCross.svg',
    iconSize: [38, 95],
});

const russianOrthodoxIcon = L.icon({
    iconUrl: 'images/RussianOrthodox.svg',
    iconSize: [38, 95],
});

const pointToLayer = (feature, latlng) => {
    if (feature.properties['place-details-order'] === 'Basilian') {
        return markers.addLayer(L.marker(latlng, { icon: russianOrthodoxIcon }));
    }
    else {
        return markers.addLayer(L.marker(latlng, { icon: catholicCross }));
    }
}
