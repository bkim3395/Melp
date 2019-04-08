import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { logout } from '../../actions/session_actions';


const msp = (state) => {
    return({
        currentUser: state.session.currentUser,
        bounds: state.ui.bounds,
    })
}

const mdp = (dispatch) => {
    return ({
        logout: () => { return dispatch(logout()) },
    });
}

class MainHeader extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            searchTerm: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const searchTerm = this.state.searchTerm;
        if (this.props.history.location.pathname !== "/search"){
            this.props.history.push({
                pathname: "/search",
                search: searchTerm,
            });
        }
        else{
            let arr = searchTerm.split(" ");
            let str = arr.join("%20")
            this.props.history.push(`/search?${str}`)
        }
    }

    handleUpdate(e) {
        this.setState({ searchTerm: e.target.value });
    };



    render(){


    const searchForm = (

        <form className="search-form" onSubmit={this.handleSubmit}>
            <label className="search-wrapper">
                <span className="search-prefix">Find</span>
                <input placeholder="Korean food, Indian food, etc..." type="text"
                        onChange={this.handleUpdate}
                        className="search-box" />
            </label>
            <button className="search-submit" type="submit">
                <FontAwesomeIcon icon="search" />
            </button>
        </form>
        );

    let credentials;

    if(this.props.currentUser){
        credentials = (<div className="mh-credentials">
            <button id="mh-logout" onClick={this.props.logout}>Logout</button>
            </div>);
    }
    else{
        credentials = (<div className="mh-credentials"><Link to="/login" id="mh-login">Log In</Link>
            <Link to="/signup" id="mh-signup">Sign Up</Link></div>)
    }


    return (
        <div className="main-header">
            <div className="mh-container">
                <Link to="/"><p>Melp</p>
                </Link>
                {searchForm}
                {credentials}
            </div>
        </div>
        );
    }
}

export default withRouter(connect(msp, mdp)(MainHeader));