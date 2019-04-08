import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';

const thunk = ({ getState, dispatch }) => next => action => {
    if (action instanceof Function) {
        return action(dispatch, getState);
    }
    return next(action);
}

const middlewares = [thunk]

if(process.env.NODE_ENV !== 'production'){
    const { logger } = require('redux-logger');
    middlewares.push(logger);
}

export default (preloadedState = {}) => (
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(...middlewares)
    )
);