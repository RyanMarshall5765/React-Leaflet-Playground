import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import L from 'leaflet'
import { geojson } from '../data/places.js'
import SearchBar from './SearchBar.js'
import MarkerClusterGroup from 'react-leaflet-markercluster';
import '../containers/App.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

const test = {
    "whatever": {
        "indeed": {
            "hello": "goodbye!"
        }
    },
    "wherever": "indeed"
}

const keyValuePairs = (values, currentValue) => {
    if (typeof currentValue === "object"){
        Object.values(currentValue).map(keyValuePairs.bind(true,values))
    } else{
        values.push(currentValue)
    }
}

export class PlacesMap extends Component {
    constructor(props) {
        super(props)
        this.onEachFeature = this.onEachFeature.bind(this)
        this.pointToLayer = this.pointToLayer.bind(this)
        this.state = {
            center: [37.73, 14.20],
            orthodoxCross: L.icon({
                iconUrl: 'images/orthodox_cross_black.svg',
                iconSize: [38, 95],
            }),
            simpleCrossBlue: L.icon({
                iconUrl: 'images/simple_cross_blue.svg',
                iconSize: [38, 95],
            }),
            simpleCrossBlack: L.icon({
                iconUrl: 'images/simple_cross_black.svg',
                iconSize: [38, 95],
            })
        }
    }


    onEachFeature = (feature, layer) => {
        const placesTabContent = []
        const locationTabContent = []

        Object.values(test).map(keyValuePairs.bind(true, locationTabContent)); 

        for (const prop in feature.properties.place) {
            if (typeof feature.properties.place[prop] === 'object') {
                console.log('Here')
            } else {
                placesTabContent.push(`<b> ${prop} </b> : ${feature.properties.place[prop]} <br>`)
          }
        }

        const content =`<div class="tabs">
            <div class="tab" id="places_tab">
            <div class="content">
            ${placesTabContent} 
            </div>
            </div> 
            <div class="tab" id="location_tab">
            <div class="content">
            ${locationTabContent} 
            </div>
            </div>
            <ul class="tabs-link">
            <li class="tab-link"> <a href="#places_tab"><span>Places</span></a></li>
            <li class="tab-link"> <a href="#location_tab"><span>Location</span></a></li>
            </ul>
            </div>`


        layer.bindPopup(content)
    }

    pointToLayer = (feature, latlng) => {
        switch (feature.properties.place.details.order) {
            case 'Basilian':
                return L.marker(latlng, { icon: this.state.orthodoxCross });
            case 'Augustinian Canons':
                return L.marker(latlng, { icon: this.state.simpleCrossBlue });
            default:
                return L.marker(latlng, { icon: this.state.simpleCrossBlack });
        }
    }


    render() {
        return (
            <div>
                <Map center={this.state.center} zoom={8}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" maxZoom={18} />
                    <SearchBar />
                    <MarkerClusterGroup>
                        <GeoJSON
                            data={geojson}
                            onEachFeature={this.onEachFeature}
                            pointToLayer={this.pointToLayer} />
                    </MarkerClusterGroup>
                </Map>
            </div>
        );
    }
}

