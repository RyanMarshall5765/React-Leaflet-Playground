import {} from "../actions/types";

const initalState = {
  center: [37.73, 14.2],
  zoom: 8,
  maxZoom: 18
};

export default function(state = initalState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
