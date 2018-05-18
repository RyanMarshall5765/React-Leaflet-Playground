import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { MapControl } from 'react-leaflet'
import 'leaflet-geosearch/assets/css/leaflet.css'


class SearchBar extends MapControl {

  createLeafletElement() {
    return GeoSearchControl({
      provider: new OpenStreetMapProvider(),
      style: 'bar',
      showMarker: true,
      showPopup: false,
      autoClose: false,
      retainZoomLevel: false,
      animateZoom: true,
      keepResult: false,
      searchLabel: 'search'
    });
  }
}

export default SearchBar;