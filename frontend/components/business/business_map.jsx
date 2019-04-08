import React from 'react';
import MarkerManager from '../../util/marker_manager';

class BusinessMap extends React.Component {

    componentDidMount() {

        const mapOptions = {
            center: { lat: this.props.business.latitude, lng: this.props.business.longitude },
            zoom: 16
        };

        this.mapNode = this.refs.map;
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers([this.props.business]);
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers([this.props.business]);
    }

    render() {
        return (
            <div id="business-map-container" ref="map"></div>
        );
    }

}

export default BusinessMap;
