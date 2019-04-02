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
        super(props);    
        this.searchWords = props.history.location.search.slice(1);
    }

    componentDidMount(){
        const searchTerm = this.props.history.location.search.slice(1);
        this.props.fetchBusinesses(searchTerm);
    }

    render(){
        const businesses = this.props.businesses.map((business) => {
            return <BusinessItem business={business} key={business.id} />
        })

        if(this.searchWords.includes("%20")){
            let arr = this.searchWords.split("%20");
            this.searchWords = arr.join(" ");
        }



        let bestPlace = "Places"
        if(this.props.history.location.search){
            bestPlace = this.searchWords;
        }

        return(
            <>
        
            <InputHeader />

            <div className="search-header">
                <div className="search-header-text">
                    <p>Best {bestPlace}</p><p> in your area!</p>
                </div>
            </div>

                <div className="search-page">
                    <div className="search-container">
                        <ul className="search-results">
                                {businesses}
                        </ul>
                    </div>

                    <div className="search-map"></div>

                </div>


            </>
        );

    }
}


export default connect(msp,mdp)(Search)