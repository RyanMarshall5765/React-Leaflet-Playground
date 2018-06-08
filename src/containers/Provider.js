import { geojson } from '../data/places.js'



const nameParse = (data) => {
  return Object.values(data).map((value) => {
      if (value) {
          if (typeof value === "object") {
              return nameParse(value);
          } else {
              return (value)
          }
      } else {
          return ('Here')
      }
  })
};
const nameContent = geojson.features.map((feature) => {
  const name = feature.properties.place.names[1];
  return name ? nameParse(name) : null;
});

console.log(nameContent)

class Provider {
  async search({ query }) {
    return geojson.features.map(function (feature) {
      return {
        x: feature.geometry.coordinates[0],
        y: feature.geometry.coordinates[1],
        label: nameContent,
        bounds: [
          [Number, Number], 
          [Number, Number]
        ],
      };
    });
  }
}

export default Provider;