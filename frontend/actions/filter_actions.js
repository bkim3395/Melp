import { fetchBusinesses } from './business_actions';
export const UPDATE_BOUNDS = "UPDATE_BOUNDS";


export const updateBounds = (searchTerm, bounds) => (dispatch, getState) => {
    dispatch({
        type: UPDATE_BOUNDS,
        bounds,
    });
    dispatch(fetchBusinesses(searchTerm, getState().ui.bounds));
};
