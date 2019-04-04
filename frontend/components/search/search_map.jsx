import React from 'react';
import MarkerManager from '../../util/marker_manager';

class SearchMap extends React.Component{

  componentDidMount(){
    // set the map to show currentUser's position
    let lat;
    let lng;
    
    if(!this.props.currentUser){
        lat = 40.751369;
        lng = -73.983927;
    }
    else{
        lat = this.props.currentUser.latitude;
        lng = this.props.currentUser.longitude;
    }

    const mapOptions = {
        center: { lat, lng },
        zoom: 12
    };

    // wrap this.mapNode in a Google Map
    this.mapNode = this.refs.map;
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.businesses);
    this.map.addListener('idle', () => {
    const bounds = {"northEast": {lat: this.map.getBounds().getNorthEast().lat(),
                                  lng: this.map.getBounds().getNorthEast().lng()},
                     "southWest": {lat: this.map.getBounds().getSouthWest().lat(),
                                  lng: this.map.getBounds().getSouthWest().lng(),}
                     };
    this.props.updateBounds(this.props.searchWords, bounds);
    });
  
  }

  componentDidUpdate(){
    this.MarkerManager.updateMarkers(this.props.businesses);
  }

  // this ref gives us access to the map dom node
  render(){
    return(
      <div id="search-map-container" ref="map"></div>
    );
  }

}

export default SearchMap;

//<div ref={ map => this.mapNode = map }> 
//react calls this cb and says the ref the dom is pointing to is now this.mapNode.