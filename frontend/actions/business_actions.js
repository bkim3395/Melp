export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS_ERRORS = "RECEIVE_REVIEWS_ERRORS";
export const DELETE_REVIEW = "DELETE_REVIEW";

import * as API_B from '../util/api_business';

export const receiveBusinesses = (business) => 
                    ({
                        type: RECEIVE_BUSINESSES,
                        business,
                     });

export const receiveBusiness = (response) => 
                     ({
                        type: RECEIVE_BUSINESS,
                        response,
                     });

export const receiveReview = (review) => 
                    ({
                        type: RECEIVE_REVIEW,
                        review,
                    });

export const receiveReviewErrors = (errors) =>{
                    return ({
                        type: RECEIVE_REVIEWS_ERRORS,
                        errors,
                    })};
                    


export const fetchBusinesses = () => (dispatch) => {
    return API_B.fetchBusinesses().then((business) => {
        dispatch(receiveBusinesses(business));
    })
};

export const fetchBusiness = (businessId) =>(dispatch) => {
    return API_B.fetchBusiness(businessId).then((response) => {
        dispatch(receiveBusiness(response))
    })
};

export const postReview = (formData) => (dispatch) => {
    return API_B.postReview(formData).then(
        (formData) => {
            return dispatch(receiveReview(formData))
        },
        (errors) => {
            dispatch(receiveReviewErrors(errors.responseJSON))
        }
    )
};

export const deleteReview = (reviewId) => (dispatch) => {
    return API_B.deleteReview(reviewId).then(
        () => {
            return dispatch({
                type: DELETE_REVIEW,
                reviewId,
            })
        }
    )
}