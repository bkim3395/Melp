import { RECEIVE_BUSINESS, RECEIVE_REVIEW } from
    '../../actions/business_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BUSINESS:
            let reviews = action.response.review || {};
            return reviews
        case RECEIVE_REVIEW:
            return merge({},state,action.review)
        default:
            return state;
    }
};