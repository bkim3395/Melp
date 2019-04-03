import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const mdp = (dispatch) => {
    return ({
        fetchBusinesses: (searchTerm) => dispatch(fetchBusinesses(searchTerm)),
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
            this.props.fetchBusinesses(searchTerm)
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

    return (
        <div className="main-header">
            <div className="mh-container">
                <Link to="/"><p>Melp</p>
                </Link>
                {searchForm}
            </div>
        </div>
        );
    }
}

export default withRouter(connect(null, mdp)(MainHeader));