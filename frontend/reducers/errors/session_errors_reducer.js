import { RECEIVE_SESSION, DESTROY_SESSION, RECEIVE_ERRORS }
    from '../../actions/session_actions';

const _nullState = [];

export default (state = _nullState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case RECEIVE_SESSION || DESTROY_SESSION:
            return _nullState;
        default:
            return state;
    }
};