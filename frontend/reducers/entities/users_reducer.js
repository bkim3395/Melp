import { RECEIVE_SESSION, RECEIVE_ALL_USERS } from '../../actions/session_actions'
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION:
            const new_user = { [action.user.id]: action.user }
            return merge({}, state, new_user);
        case RECEIVE_ALL_USERS:
            return action.users;
        default:
            return state;
    }
}

