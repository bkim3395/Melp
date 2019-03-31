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
                <p className="github">
                <FontAwesomeIcon icon={['fab', 'github']} />
                <a className="github-link" href="https://github.com/bkim3395">Github</a></p>
            </div>
            <div>
                <p className="red-bold">Credits to:</p>
                <br></br>
                <p>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></p>
            </div>
        </div>
        <div className="footer-image"></div>
        </div>
    );

};