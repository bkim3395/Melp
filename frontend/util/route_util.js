import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const msp = state => {
    return { loggedIn: Boolean(state.session.currentUser),
            reviews: state.entities.reviews,
            currentUser: state.session.currentUser,
        };
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


const ProtectReview = ({ reviews, currentUser, path, exact, component: Component}) => (
    <Route
        path={path}
        exact={exact}
        render={props => {
            let redirect = false;
            let arr = Object.values(reviews);
            arr.forEach((review) => {
                if(review.author_id === currentUser){
                    redirect = true;
                }
            })
            return (redirect ? <Redirect to={`/business/${props.match.params.businessId}/`} /> 
            : <Component {...props} />)
        }}
    />
)



export const AuthRoute = withRouter(connect(msp, null)(Auth));
export const ProtectedRoute = withRouter(connect(msp,null)(Protect));
export const ProtectedReviewRoute = withRouter(connect(msp,null)(ProtectReview));