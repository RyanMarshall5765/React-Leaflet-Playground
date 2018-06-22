import { geojson } from "../data/places";

class Provider {
  async search({ query }) {
    return geojson.features
      .filter(
        feature =>
          feature.properties.place.names[0].name
            .toLowerCase()
            .indexOf(query.toLowerCase()) > -1
      )
      .map(feature => ({
        x: feature.geometry.coordinates[0],
        y: feature.geometry.coordinates[1],
        label: feature.properties.place.names[0].name
      }));
  }
}

export default Provider;
