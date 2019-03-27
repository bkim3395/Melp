import React from 'react';

export default (props) => {

    return(
        <div className="welcome-suggestions">
        <h2 className="suggestion-title">Pick your Cuisine!</h2>
        <div className="cuisine-list">
            <div className="cuisine">
                <img src="https://i.imgur.com/tvoJxda.jpg"></img>
                <div>Korean Food</div>
            </div>
            <div className="cuisine">
                <img src="https://i.imgur.com/vxJJACS.jpg"></img>
                <div>Japanese Food</div>
            </div>
            <div className="cuisine">
                <img src="https://i.imgur.com/VjNpruw.jpg"></img>
                <div>Chinese Food</div>
            </div>
        </div>  
        </div>
    );

}; 