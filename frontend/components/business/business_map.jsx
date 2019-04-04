import React from 'react';
import MarkerManager from '../../util/marker_manager';

class BusinessMap extends React.Component {

    componentDidMount() {

        const mapOptions = {
            center: { lat: this.props.business.latitude, lng: this.props.business.longitude },
            zoom: 16
        };

        // wrap this.mapNode in a Google Map
        this.mapNode = this.refs.map;
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers([this.props.business]);
        // this.map.addListener('idle', () => {
        // const bounds = {"northEast": {lat: this.map.getBounds().getNorthEast().lat(),
        //                               lng: this.map.getBounds().getNorthEast().lng()},
        //                  "southWest": {lat: this.map.getBounds().getSouthWest().lat(),
        //                               lng: this.map.getBounds().getSouthWest().lng(),}
        //                  };
        // this.props.updateBounds(bounds);
        // });

    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers([this.props.business]);
    }

    // this ref gives us access to the map dom node
    render() {
        return (
            <div id="business-map-container" ref="map"></div>
        );
    }

}

export default BusinessMap;

//<div ref={ map => this.mapNode = map }> 
//react calls this cb and says the ref the dom is pointing to is now this.mapNode.