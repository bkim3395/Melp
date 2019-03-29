import { RECEIVE_REVIEW, RECEIVE_REVIEWS_ERRORS }
    from '../../actions/business_actions';
import { CLEAR_ERRORS } from '../../actions/session_actions';

const _nullState = [];

export default (state = _nullState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_REVIEWS_ERRORS:
            return action.errors;
        case RECEIVE_REVIEW:
            return _nullState;
        case CLEAR_ERRORS:
            return _nullState;
        default:
            return state;
    }
};