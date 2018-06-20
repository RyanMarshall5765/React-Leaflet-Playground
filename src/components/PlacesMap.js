import React, { Component } from "react";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import L from "leaflet";
import { geojson } from "../data/places.js";
import SearchBar from "./SearchBar.js";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "../containers/App.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const style = { width: 600, margin: 50 };
function printToConsoleVlaue(value) {
  console.log(value); //eslint-disable-line
}

export class PlacesMap extends Component {
  constructor(props) {
    super(props);
    this.onEachFeature = this.onEachFeature.bind(this);
    this.pointToLayer = this.pointToLayer.bind(this);
    this.parseGeoJson = this.parseGeoJson.bind(this);
    this.state = {
      center: [37.73, 14.2],
      zoom: 8,
      maxZoom: 18,
      orthodoxCross: L.icon({
        iconUrl: "images/orthodox_cross_black.svg",
        iconSize: [38, 95]
      }),
      simpleCrossBlue: L.icon({
        iconUrl: "images/simple_cross_blue.svg",
        iconSize: [38, 95]
      }),
      simpleCrossBlack: L.icon({
        iconUrl: "images/simple_cross_black.svg",
        iconSize: [38, 95]
      })
    };
  }

  parseGeoJson(data) {
    return Object.entries(data).map(([key, value]) => {
      if (value)
        return typeof value === "object"
          ? this.parseGeoJson(value)
          : `${key} : ${value} <br>`;
      return `${key} is empty <br>`;
    });
  }

  popupContent(feature, info) {
    const content = feature.properties[info];
    return content ? this.parseGeoJson(content) : null;
  }

  onEachFeature(feature, layer) {
    const content = `<div class="tabs">
            <div class="tab" id="places_tab">
            <div class="content">
            ${this.popupContent(feature, "place")} 
            </div>
            </div> 
            <div class="tab" id="location_tab">
            <div class="content">
            ${this.popupContent(feature, "location")} 
            </div>
            </div>
            <ul class="tabs-link">
            <li class="tab-link"> <a href="#places_tab"><span>Places</span></a></li>
            <li class="tab-link"> <a href="#location_tab"><span>Location</span></a></li>
            </ul>
            </div>`;

    layer.bindPopup(content);
  }

  pointToLayer(feature, latlng) {
    switch (feature.properties.place.details.order) {
      case "Basilian":
        return L.marker(latlng, { icon: this.state.orthodoxCross });
      case "Augustinian Canons":
        return L.marker(latlng, { icon: this.state.simpleCrossBlue });
      default:
        return L.marker(latlng, { icon: this.state.simpleCrossBlack });
    }
  }

  // BrainStorm Code -- Idea of how to make slider remove markers
  // timeSlider(geojson, sliderValue) {
  //   return geojson.map(time => {
  //     if (geojson.time > sliderValue) {
  //       return <GeoJSON With corresponding data/>
  //     } else {
  //       return nothing
  //     }
  //   });
  // }

  render() {
    return (
      <div>
        <Map center={this.state.center} zoom={this.state.zoom}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={this.state.maxZoom}
          />
          <SearchBar />
          <MarkerClusterGroup>
            <GeoJSON
              data={geojson}
              onEachFeature={this.onEachFeature}
              pointToLayer={this.pointToLayer}
            />
          </MarkerClusterGroup>
        </Map>
        <p>Time Slider Test</p>
        <Slider style={style} onChange={printToConsoleVlaue} />
      </div>
    );
  }
}
