import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

    let credentials = (<div id="logged_in_credentials">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login!</Link>
        </div>
        );

    if (props.currentUser) {
        credentials = (<><button id="Logout" onClick={props.logout}>Logout</button></>);
    }

    return (
            <>
            {credentials}
            </>
    );

};