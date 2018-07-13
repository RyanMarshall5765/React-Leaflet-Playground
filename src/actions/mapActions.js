import {} from "./types";

export const fetchGeojson = data => dispatch => {
// Current way to pull data
//   return Object.entries(data).map(([key, value]) => {
//     if (value) {
//       return typeof value === "object"
//         ? this.parseGeoJson(value)
//         : `${key} : ${value} <br>`;
//     }
//     return `${key} is empty <br>`;
//   });
};

// example fetch function
// export const fetchData = () => dispatch => {
//   fetch("API URL")
//     .then(res => res.join())
//     .then(data =>
//       dispatch({
//         type: FETCH_DATA,
//         payload: data
//       })
//     );
// };
