import React, { Component } from "react";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { geojson } from "../data/places";
import { flatGeojson } from "../data/placesFlat";
import SearchBar from "./SearchBar";
import "../containers/App.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

class PlacesMap extends Component {
  constructor(props) {
    super(props);
    this.onEachFeature = this.onEachFeature.bind(this);
    this.pointToLayer = this.pointToLayer.bind(this);
    this.parseGeoJson = this.parseGeoJson.bind(this);
    this.state = {
      center: [37.73, 14.2],
      zoom: 8,
      maxZoom: 18
    };
  }

  parseGeoJson(data) {
    return Object.entries(data).map(([key, value]) => {
      if (value) {
        return typeof value === "object"
          ? this.parseGeoJson(value)
          : `${key} : ${value} <br>`;
      }
      return `${key} is empty <br>`;
    });
  }

  popupContent({ properties }) {
    const content = properties;
    return content ? this.parseGeoJson(content) : null;
  }

  onEachFeature(feature, layer) {
    layer.bindPopup(
      `<div class="tabs">
          <div class="tab" id="places_tab">
          <div class="content">
          ${this.popupContent(feature)}
          </div>
          </div>
          <div class="tab" id="location_tab">
          <div class="content">
          </div>
          </div>
          </div>`
    );
  }

  icons(type, color) {
    return L.icon({
      iconUrl: `images/${type}_cross_${color}.svg`,
      iconSize: [38, 95]
    });
  }

  //prettier-ignore
  pointToLayer({ properties: { order } } , latlng) {
    const orderType = {
      Basilian: L.marker(latlng, {
        icon: this.icons("orthodox", "black")
      }),
      "Augustinian Canons": L.marker(latlng, {
        icon: this.icons("simple", "blue")
      }),
      "Knights of the Hospital of Saint John of Jerusalem": L.marker(latlng, {
        icon: this.icons("simple", "green")
      }),
      Benedictine: L.marker(latlng, { icon: this.icons("simple", "purple") }),
      Cistercian: L.marker(latlng, { icon: this.icons("simple", "red") }),
      "Premonstratensian Canons": L.marker(latlng, {
        icon: this.icons("simple", "yellow")
      }),
      Cluniac: L.marker(latlng, { icon: this.icons("cemetery", "black") }),
      "Knights Templar": L.marker(latlng, {
        icon: this.icons("cemetery", "red")
      })
    };
    return (
      orderType[order] ||
      L.marker(latlng, { icon: this.icons("simple", "black") })
    );
  }

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
              data={flatGeojson}
              onEachFeature={this.onEachFeature}
              pointToLayer={this.pointToLayer}
            />
          </MarkerClusterGroup>
        </Map>
      </div>
    );
  }
}

export default PlacesMap;
