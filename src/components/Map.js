import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import L from 'leaflet'
import { testJson} from '../data/places.js'
import '../containers/App.css';

let geojson = testJson();
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

class MapOne extends Component {
    constructor(props) {
        super(props)
        this.onEachFeature = this.onEachFeature.bind(this)
        this.pointToLayer = this.pointToLayer.bind(this)
        this.state = {
            center: [35.53, 15.20]
        }
    }
        onEachFeature = (feature, layer) => {
            const popUpContent = [];
            for (const prop in feature.properties) {
                if (feature.properties[prop] != null) {
                    popUpContent.push('<h3>' + prop +  ': </h3>' + feature.properties[prop] )
                }
            }
            layer.bindPopup(popUpContent.join())
        } 

        pointToLayer = (feature,latlng) => {
            switch(feature.properties['place-details-order']) {
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
                    onEachFeature={this.onEachFeature}
                    pointToLayer={this.pointToLayer}
                />

            </Map>
            </div>
        );
    }
}
export default MapOne;
