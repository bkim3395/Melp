import React from 'react';
import { Link } from 'react-router-dom'

export default (props) => {

    return(
        <div className="input-header">
            <Link to="/"><img src={window.logoURL}></img>
            </Link>
        </div>
    );

}