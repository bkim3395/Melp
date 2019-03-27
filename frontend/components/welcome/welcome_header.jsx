import React from 'react';
import { Link } from 'react-router-dom';

class WelcomeHeader extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        let credentials = (<div className="credentials">
            <div className="credentials-container">
                <Link to="/login">Login!</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
        );

        if (this.props.currentUser) {
            credentials = (<div className="credentials">
                <div className="credentials-container">
                    <button id="Logout" onClick={props.logout}>Logout</button>
                </div>
            </div>);
        }

        const searchForm = (
            <form></form>
        );

        return (
            <>
                <div className="welcome-header">
                    {credentials}
                    <div className="site-logo">MELP</div>
                </div>
            </>
        );

    }
};

export default WelcomeHeader