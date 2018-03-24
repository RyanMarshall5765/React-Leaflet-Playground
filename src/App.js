import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON, Popup} from 'react-leaflet'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      center: [37.83,14.33]
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
        maxZoom = {18}
      />
      <GeoJSON 
      data={getGeoJSON()} 
      onEachFeature = {onEachFeature}
      />
    </Map>
    );
  }
}
export default App;

function getGeoJSON() {
  return {
    "type":"FeatureCollection",
    "features":[
      {
        "type":"Feature",
        "geometry":{
          "type":"Point",
          "coordinates":[
            14.8353867,
            37.6639868,0]
          },
          "properties":{
            "place-details-founders":"Adelasia (Granddaughter of Count Roger I),Countess,Female","place-details-type":"monastery",
            "name":"Saint Elias the Prophet",
            "province":"Catania",
            "comune":"Adrano",
            "place-details-gender":"Male",
            "id":131,
            "place-details-foundation-rank":"Priory",
            "name-it":"Sant'Elia Profeta",
            "place-details-order":"Augustinian Canons","locations-same-as-uris-geonames-uri":"http://www.geonames.org/maps/google_37.662_14.835.html",
            "place-details-relationships-parent":"Church of the Holy Sepulchre, Jerusalem","historical-province":"Val Demone","locations-same-as-uris-medioevosicilia-eu-uri":null,"place-details-dedication":"Saint Elias",
          }
        }
      ]
    }
  }

  function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.name);
    }
}