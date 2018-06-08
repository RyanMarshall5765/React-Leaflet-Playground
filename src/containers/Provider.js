import { geojson } from '../data/places.js'

class Provider {
  async search({ query }) {
    return geojson.features.map(function (feature) {
      return {
        x: feature.geometry.coordinates[0],
        y: feature.geometry.coordinates[1],
        label: feature.properties.place.names.name,
        bounds: [
          [Number, Number], 
          [Number, Number]
        ],
      };
    });
  }
}

export default Provider;