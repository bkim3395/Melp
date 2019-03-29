import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from 
'../../actions/business_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_BUSINESSES:
            return action.business
        case RECEIVE_BUSINESS:
            return merge({}, state, action.response.business)
        default:
            return state;
    }
};