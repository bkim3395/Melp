import React from 'react';
import { withRouter } from 'react-router-dom';

const welSuggest = (props) => {

    const handleClick = (cuisine) => () => {
        props.history.push({
            pathname: "/search",
            search: cuisine,
        })
    };

    return(
        <div className="welcome-suggestions">
        <h2 className="suggestion-title">Find the Best Business in Town</h2>
        <div className="cuisine-list">
            <div className="cuisine" onClick={handleClick("Korean")}>
                    <img src={window.koreaURL}></img>
                    <div><p>Korean Food</p></div>
            </div>
            <div className="cuisine" onClick={handleClick("Japanese")}>
                <img src={window.japanURL}></img>
                    <div><p>Japanese Food</p></div>
            </div>
            <div className="cuisine" onClick={handleClick("Chinese")}>
                <img src={window.chinaURL}></img>
                    <div><p>Chinese Food</p></div>
            </div>
            <div className="cuisine" onClick={handleClick("Indian")}>
                <img src={window.indiaURL}></img>
                    <div><p>Indian Food</p></div>
                </div>
            </div>  
        </div>
    );

}; 

export default withRouter(welSuggest);