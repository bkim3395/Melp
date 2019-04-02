import React from 'react'
import { connect } from 'react-redux';
import { fetchBusinesses } 
from '../../actions/business_actions';
import BusinessItem from './business_item';
import InputHeader from '../header/input_header'

const msp = (state) => {
    return({
        businesses: Object.values(state.entities.businesses),
    })
}

const mdp = (dispatch) => {
    return({
        fetchBusinesses: (searchTerm) => dispatch(fetchBusinesses(searchTerm)),
    });
}

class Search extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        const searchTerm = this.props.history.location.search.slice(1);
        this.props.fetchBusinesses(searchTerm);
    }

    render(){
        const businesses = this.props.businesses.map((business) => {
            return <BusinessItem business={business} key={business.id} />
        })

        return(
            <>
            <InputHeader />
            <div className="search-container">
                <ul className="search-results">
                    {businesses}
                </ul>
            </div>
            </>
        );

    }
}


export default connect(msp,mdp)(Search)