import { RECEIVE_GEOLOCATION } from '../../actions/filter_actions';

export default (state = {lat: null, lng: null}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_GEOLOCATION:
            return {lat: action.lat, lng: action.lng}
        default:
            return state;
    }
};