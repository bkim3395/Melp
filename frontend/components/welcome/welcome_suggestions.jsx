import React from 'react';

export default (props) => {

    return(
        <div className="welcome-suggestions">
        <h2 className="suggestion-title">Find the Best Business in Town</h2>
        <div className="cuisine-list">
            <div className="cuisine">
                <img src={window.koreaURL}></img>
                <div>Korean Food</div>
            </div>
            <div className="cuisine">
                <img src={window.japanURL}></img>
                <div>Japanese Food</div>
            </div>
            <div className="cuisine">
                <img src={window.chinaURL}></img>
                <div>Chinese Food</div>
            </div>
        </div>  
        </div>
    );

}; 