import React from 'react';

export default (props) => {

    return(
        <div className="welcome-suggestions">
        <h2 className="suggestion-title">Find the Best Business in Town</h2>
        <div className="cuisine-list">
            <div className="cuisine">
                    <img src={window.koreaURL}></img>
                    <div><p>Korean Food</p></div>
            </div>
            <div className="cuisine">
                <img src={window.japanURL}></img>
                    <div><p>Japanese Food</p></div>
            </div>
            <div className="cuisine">
                <img src={window.chinaURL}></img>
                    <div><p>Chinese Food</p></div>
            </div>
            <div className="cuisine">
                <img src={window.indiaURL}></img>
                    <div><p>Indian Food</p></div>
                </div>
            </div>  
        </div>
    );

}; 