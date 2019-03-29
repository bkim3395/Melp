import * as API_S from '../util/api_session';

export const RECEIVE_SESSION = "RECEIVE_SESSION";
export const DESTROY_SESSION = "DESTROY_SESSION";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR ERRORS";

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_SESSION,
    user,
});

export const logoutCurrentUser = () => ({
    type: DESTROY_SESSION,
});

export const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors,
});

export const clearErrors = () => {
    return({
        type: CLEAR_ERRORS,
    })
}

export const login = (user) => (dispatch) => {
    return API_S.login(user).then((user) => {
        dispatch(receiveCurrentUser(user))}, 
        (errors) => {
                dispatch({
                    type: RECEIVE_SESSION_ERRORS,
                    errors: errors.responseJSON,
                     })
    });
};


export const logout = () => (dispatch) => {
    return API_S.logout().then(() => {
        dispatch(logoutCurrentUser());
    });
};

export const signup = (user) => (dispatch) => {
    return API_S.signup(user).then((user) => {
        dispatch(receiveCurrentUser(user));}, 
        (errors) => {
            dispatch({
                    type: RECEIVE_SESSION_ERRORS,
                    errors: errors.responseJSON,
                    })
    });
};

export const requestUsers = () => (dispatch) => {
    return API_S.fetchUsers().then((users) => {
        dispatch({
            type: RECEIVE_ALL_USERS,
            users,
        })
    });
};