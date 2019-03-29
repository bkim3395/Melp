export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS_ERRORS = "RECEIVE_REVIEWS_ERRORS";

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

export const postReview = (review) => (dispatch) => {
    return API_B.postReview(review).then(
        (review) => {
            
            dispatch(receiveReview(review))
        },
        (errors) => {
            dispatch(receiveReviewErrors(errors.responseJSON))
        }
    )
};