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


const ProtectReview = ({ loggedIn, store, path, exact, component: Component}) => (
    <Route
        path={path}
        exact={exact}
        render={props => {
            let redirect = false;
            debugger
            let arr = Object.values(store.getState().entities.reviews);
            arr.forEach((review) => {
                    debugger
                if(review.author_id === store.getState().session.currentUser){
                    debugger
                    redirect = true;
                }
            })
            debugger
            return(redirect ? <Redirect to={path.substring(0,21)} /> : <Component {...props} />)
        }}
    />
)



export const AuthRoute = withRouter(connect(msp, null)(Auth));
export const ProtectedRoute = withRouter(connect(msp,null)(Protect));
export const ProtectedReviewRoute = withRouter(connect(msp,null)(ProtectReview));