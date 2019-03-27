import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const msp = state => {
    return { loggedIn: Boolean(state.session.currentUser) };
};

const Auth = ({ loggedIn, path, exact, component: Component }) => (
    <Route
        path={path}
        exact={exact}
        render={props => (
            loggedIn ? <Redirect to="/" />
                : <Component {...props} />
        )}
    />
);

const Protect = ({ loggedIn, path, exact, component: Component }) => (
    <Route
        path={path}
        exact={exact}
        render={props => (
            loggedIn ? <Component {...props} />
                : <Redirect to="/" />
        )}
    />
);



export const AuthRoute = withRouter(connect(msp, null)(Auth));
export const ProtectedRoute = withRouter(connect(msp,null)(Protect));