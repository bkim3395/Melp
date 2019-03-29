export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS"
export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES"
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"

import * as API_B from '../util/api_business';

export const receiveBusinesses = (business) => 
                    ({
                        type: RECEIVE_BUSINESSES,
                        business,
                     })

export const receiveBusiness = (business, review) => 
                     ({
                        type: RECEIVE_BUSINESS,
                        business,
                        review,
                     })

export const receiveReview = (review) => 
                    ({
                        type: RECEIVE_REVIEW,
                        review,
                    })


export const fetchBusinesses = () => (dispatch) => {
    return API_B.fetchBusinesses().then((business) => {
        debugger
        dispatch(receiveBusinesses(business));
    })
}

export const fetchBusiness = (businessId) =>(dispatch) => {
    return API_B.fetchBusiness(businessId).then((response) => {
        debugger
        dispatch(receiveBusiness(response.business, response.review))
    })
}

export const postReview = (review) => (dispatch) => {
    return API_B.postReview(review).then((review) => {
        debugger
        dispatch(receiveReview(review));
    })
}