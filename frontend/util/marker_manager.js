export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
        this.updateMarkers = this.updateMarkers.bind(this);
        this.createMarkerFromBusiness = this.createMarkerFromBusiness.bind(this);
        this.removeMarker = this.removeMarker.bind(this);
    }

    updateMarkers(businesses) {

        //Make obj filled with businesses from argument
        let businesses_obj = {};
        businesses.forEach((business) => {
            businesses_obj[business.id] = business;
        });

        //Go through argument and give markers to new businesses not included 
        //in this.markers.
        businesses.forEach((business) => {
            if (!this.markers[business.id]) {
                this.createMarkerFromBusiness(business);
            }
        });

        //Now, use obj we just created to remove businesses not in argument given
        //from this.markers.
        Object.keys(this.markers).forEach((id) => {
            if (!businesses_obj[id]) {
                this.removeMarker(id);
            }
        });
    }

    createMarkerFromBusiness(business) {
        let pos = { lat: business.latitude, lng: business.longitude };
        this.markers[business.id] = new google.maps.Marker({
            position: pos,
            map: this.map,
            animation: google.maps.Animation.DROP,
            title: business.name,
        });
    }

    removeMarker(id) {
        this.markers[id].setMap(null);
        delete this.markers[id];
    }
}
