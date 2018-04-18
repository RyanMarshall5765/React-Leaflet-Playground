import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet'
import { testJson } from '../data/places.js'
import '../node_fix/MarkerCluster.css';
import '../node_fix/MarkerCluster.Default.css';
import '../containers/App.css';

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

    

const simpleCrossBlack = L.icon({
    iconUrl: 'images/simple_cross_black.svg',
    iconSize: [38, 95],
});

const simpleCrossBlue = L.icon({
    iconUrl: 'images/simple_cross_blue.svg',
    iconSize: [38, 95],
});

const orthodoxCross = L.icon({
    iconUrl: 'images/orthodox_cross_black.svg',
    iconSize: [38, 95],
});

const pointToLayer = (feature, latlng) => {
    if (feature.properties['place-details-order'] === 'Basilian') {
        return markers.addLayer(L.marker(latlng, { icon: orthodoxCross }));
    }
    else if (feature.properties['place-details-order'] === 'Augustinian Canons') {
        return markers.addLayer(L.marker(latlng, { icon: simpleCrossBlue }));
    }
    else{
        return markers.addLayer(L.marker(latlng, { icon: simpleCrossBlack }));
    }
}