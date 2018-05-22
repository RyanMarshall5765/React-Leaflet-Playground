import { GeoSearchControl} from 'leaflet-geosearch';
import { MapControl } from 'react-leaflet'
import Provider from '../containers/Provider.js'
import 'leaflet-geosearch/assets/css/leaflet.css'


class SearchBar extends MapControl {

  createLeafletElement() {
    return GeoSearchControl({
      provider: new Provider(),
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