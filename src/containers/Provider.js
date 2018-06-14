import { geojson } from "../data/places.js";

class Provider {
  parse(data) {
    return Object.values(data).map(value => {
      if (value) {
        return typeof value === "object" ? this.parse(value) : value;
      }
      return null;
    });
  }

  nameContent(feature) {
    const name = feature.properties.place.names[0];
    return name ? this.parse(name) : null;
  }

  async search() {
    return geojson.features.map(feature => ({
      x: feature.geometry.coordinates[0],
      y: feature.geometry.coordinates[1],
      label: this.nameContent(feature)
    }));
  }
}

export default Provider;
