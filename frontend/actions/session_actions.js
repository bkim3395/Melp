import * as API_S from '../util/api_session';

export const RECEIVE_SESSION = "RECEIVE_SESSION";
export const DESTROY_SESSION = "DESTROY_SESSION";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_SESSION,
    user,
});

export const logoutCurrentUser = () => ({
    type: DESTROY_SESSION,
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors,
});

export const login = (user) => (dispatch) => {
    return API_S.login(user).then((user) => {
        dispatch(receiveCurrentUser(user));
    });
};

export const logout = () => (dispatch) => {
    return API_S.logout().then(() => {
        dispatch(logoutCurrentUser());
    });
};

export const signup = (user) => (dispatch) => {
    return API_S.signup(user).then((user) => {
        dispatch(receiveCurrentUser(user));
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