import React from 'react';

export default (props) => {

    return(
        <div className="welcome-suggestions">
        <h2 className="suggestion-title">Pick your Cuisine!</h2>
        <div className="cuisine-list">
            <div className="cuisine">
                <img src="https://i.imgur.com/tvoJxda.jpg"></img>
                <div><p>Korean Food</p></div>
            </div>
            <div className="cuisine">
                <img src="https://i.imgur.com/vxJJACS.jpg"></img>
                <div><p>Japanese Food</p></div>
            </div>
            <div className="cuisine">
                <img src="https://i.imgur.com/VjNpruw.jpg"></img>
                <div><p>Chinese Food</p></div>
            </div>
        </div>  
        </div>
    );

}; 