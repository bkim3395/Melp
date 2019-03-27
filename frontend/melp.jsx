import React from 'react';
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
    
    //BOOTSTRAPING
    let preLoadedState = {};
    if (window.currentUser) {
        preLoadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser,
                }
            },
            session: {
                currentUser: window.currentUser.id
            },
        };
        delete window.currentUser;
    }
    //BOOTSTRAPING

    const root = document.getElementById('root');
    const store = configureStore(preLoadedState);
    
    //TESTING ONLY//
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //TESTING ONLY//

    ReactDOM.render(<Root store={store}/>, root);
});