import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default (props) => {

    return(
        <div className="footer">
        <p><FontAwesomeIcon icon={['fab', 'yelp']} /></p>
        <div className="footer-container">
            <div>
                <p className="red-bold">This clone was coded by:</p>
                <br></br>
                <p>Bumsoo Kim</p>
            </div>
            <div>
                <p className="red-bold">My Contact Information:</p>
                <br></br>
                <p className="github"><a className="github-link" href="https://github.com/bkim3395">Github</a></p>
            </div>
            <div>
                <p className="red-bold">I like pie.</p>
                <br></br>
                <p>I like pie.</p>
            </div>
        </div>
        <div className="footer-image"></div>
        </div>
    );

};