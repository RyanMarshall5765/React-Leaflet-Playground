import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import L from 'leaflet'
import { testJson } from '../data/places.js'
import SearchBar from './SearchBar.js'
import MarkerClusterGroup from 'react-leaflet-markercluster';
import '../containers/App.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const geojson = testJson();
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

export class PlacesMap extends Component {
    constructor(props) {
        super(props)
        this.onEachFeature = this.onEachFeature.bind(this)
        this.pointToLayer = this.pointToLayer.bind(this)
        this.state = {
            center: [37.73, 14.20]
        }
    }
    onEachFeature = (feature, layer) => {
        const popUpContent = [];
        for (const prop in feature.properties) {
            if (feature.properties[prop] != null) {
                popUpContent.push(prop + ': ' + feature.properties[prop] + '<br>')
            }
        }
        const content = '<div class="tabs">' +

            '<div class="tab" id="first_tab">' +
            '<div class="content">'
            + popUpContent +
            '</div>' +
            '</div>' +

            '<div class="tab" id="second_tab">' +
            '<div class="content">' +
            '<b>Content of Second Tab</b>' +
            '</div>' +
            '</div>' +

            '<div class="tab" id="third_tab">' +
            '<div class="content">' +
            '<b>Content of Third Tab</b>' +
            '</div>' +
            '</div>' +

            '<ul class="tabs-link">' +
            '<li class="tab-link"> <a href="#first_tab"><span>First</span></a></li>' +
            '<li class="tab-link"> <a href="#second_tab"><span>Second</span></a></li>' +
            '<li class="tab-link"> <a href="#third_tab"><span>Third</span></a></li>' +
            '</ul>' +
            '</div>'

        
        layer.bindPopup(content)
    }

    // onEachFeature = (feature, layer) => {
    //     const content = '<div class="tabs">' +

    //     '<div class="tab" id="first_tab">' +
    //     '<div class="content">' +
    //     '<b>Content of First Tab</b>' +
    //     '</div>' +
    //     '</div>' +

    //     '<div class="tab" id="second_tab">' +
    //     '<div class="content">' +
    //     '<b>Content of Second Tab</b>' +
    //     '</div>' +
    //     '</div>' +

    //     '<div class="tab" id="third_tab">' +
    //     '<div class="content">' +
    //     '<b>Content of Third Tab</b>' +
    //     '</div>' +
    //     '</div>' +

    //     '<ul class="tabs-link">' +
    //     '<li class="tab-link"> <a href="#first_tab"><span>First</span></a></li>' +
    //     '<li class="tab-link"> <a href="#second_tab"><span>Second</span></a></li>' +
    //     '<li class="tab-link"> <a href="#third_tab"><span>Third</span></a></li>' +
    //     '</ul>' +
    //     '</div>';

    //     layer.bindPopup(content)
    // }

    pointToLayer = (feature, latlng) => {
        switch (feature.properties['place-details-order']) {
            case 'Basilian':
                return L.marker(latlng, { icon: orthodoxCross });
            case 'Augustinian Canons':
                return L.marker(latlng, { icon: simpleCrossBlue });
            default:
                return L.marker(latlng, { icon: simpleCrossBlack });
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

