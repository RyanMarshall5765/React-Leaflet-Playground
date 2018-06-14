import React, { Component } from "react";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import L from "leaflet";
import { geojson } from "../data/places.js";
import SearchBar from "./SearchBar.js";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "../containers/App.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

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
      if (value) {
        if (typeof value === "object") {
          return this.parseGeoJson(value);
        } else {
          return `${key} : ${value} <br>`;
        }
      } else {
        return `${key} is empty <br>`;
      }
    });
  }

  placeContent(feature) {
    const place = feature.properties.place;
    return place ? this.parseGeoJson(place) : null;
  }

  locationContent(feature) {
    const location = feature.properties.location;
    return location ? this.parseGeoJson(location) : null;
  }

  onEachFeature(feature, layer) {
    const content = `<div class="tabs">
            <div class="tab" id="places_tab">
            <div class="content">
            ${this.placeContent(feature)} 
            </div>
            </div> 
            <div class="tab" id="location_tab">
            <div class="content">
            ${this.locationContent(feature)} 
            </div>
            </div>
            <ul class="tabs-link">
            <li class="tab-link"> <a href="#places_tab"><span>Places</span></a></li>
            <li class="tab-link"> <a href="#location_tab"><span>Location</span></a></li>
            </ul>
            </div>`;

    layer.bindPopup(content);
  }

  pointToLayer = (feature, latlng) => {
    switch (feature.properties.place.details.order) {
      case "Basilian":
        return L.marker(latlng, { icon: this.state.orthodoxCross });
      case "Augustinian Canons":
        return L.marker(latlng, { icon: this.state.simpleCrossBlue });
      default:
        return L.marker(latlng, { icon: this.state.simpleCrossBlack });
    }
  };

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
      </div>
    );
  }
}
