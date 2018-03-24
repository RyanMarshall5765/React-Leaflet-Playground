import React, { Component } from 'react';
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import Control from 'react-leaflet-control';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      center: [40.839, -74.20],
      msu: [40.863, -74.1990]
    } 
  }
  render() {
    return (
      <Map 
      center={this.state.center} 
      zoom={12}
      >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom = {18}
      />
      <Marker position={this.state.msu}>
        <Popup>
          <span>Montclair State University</span>
        </Popup>
      </Marker>
    </Map>
    );
  }
}

export default App;
