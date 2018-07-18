import { GeoSearchControl } from "leaflet-geosearch";
import { MapControl } from "react-leaflet";
import SearchProvider from "../containers/SearchProvider";
import "leaflet-geosearch/assets/css/leaflet.css";

class SearchBar extends MapControl {
  createLeafletElement() {
    return GeoSearchControl({
      provider: new SearchProvider(),
      autoClose: true,
      searchLabel: "search"
    });
  }
}

export default SearchBar;
