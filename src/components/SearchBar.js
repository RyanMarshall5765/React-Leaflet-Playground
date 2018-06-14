import { GeoSearchControl } from "leaflet-geosearch";
import { MapControl } from "react-leaflet";
import Provider from "../containers/Provider.js";
import "leaflet-geosearch/assets/css/leaflet.css";

class SearchBar extends MapControl {
  createLeafletElement() {
    return GeoSearchControl({
      provider: new Provider(),
      autoClose: true,
      searchLabel: "search"
    });
  }
}

export default SearchBar;
