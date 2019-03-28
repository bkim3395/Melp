import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class WelcomeHeader extends React.Component{

    constructor(props){
        super(props);
        this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
    }

    render(){

        let credentials = (<div className="credentials">
            <div className="credentials-container">
                <Link to="/login" id="login">Log In</Link>
                <Link to="/signup" id="signup">Sign Up</Link>
            </div>
        </div>
        );

        if (this.props.currentUser) {
            credentials = (<div className="credentials">
                <div className="credentials-container">
                    <button id="logout" onClick={this.props.logout}>Logout</button>
                </div>
            </div>);
        }

        const searchForm = (
            <form className="search-form" onSubmit={this.handleSubmit}>
            <label className="search-wrapper">
            <span className="search-prefix">Find</span>
            <input placeholder="Korean food, Indian food, etc..." type="text"   
                   className="search-box"/>
            </label>
            <button className="search-submit" type="submit">
                    <FontAwesomeIcon icon="search" />
            </button>
            </form>
        );

        return (
            <>
                <div className="welcome-header">
                    {credentials}
                    <div className="logo-wrapper">                    
                        <div className="site-logo"></div>
                    </div>
                    {searchForm}
                </div>
            </>
        );

    }
};

export default WelcomeHeader