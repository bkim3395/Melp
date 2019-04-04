import { fetchBusinesses } from './business_actions';
export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
export const RECEIVE_GEOLOCATION = "RECEIVE_GEOLOCATION";


export const updateBounds = (searchTerm, bounds) => (dispatch, getState) => {
    dispatch({
        type: UPDATE_BOUNDS,
        bounds,
    });
    dispatch(fetchBusinesses(searchTerm, getState().ui.bounds));
};

export const receiveGeolocation = (lat, lng) => (dispatch) => {
    dispatch({
        type: RECEIVE_GEOLOCATION,
        lat,
        lng
    })
}