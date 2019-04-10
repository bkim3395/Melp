import React from 'react'
import { connect } from 'react-redux';
import { fetchBusinesses } 
from '../../actions/business_actions';
import {updateBounds} from '../../actions/filter_actions'
import BusinessItem from './business_item';
import MainHeader from '../header/main_header'
import SearchMap from './search_map'

const msp = (state) => {
    return({
        businesses: Object.values(state.entities.businesses),
        currentUser: state.entities.users[state.session.currentUser],
        bounds: state.ui.bounds,
    })
}

const mdp = (dispatch) => {
    return({
        fetchBusinesses: (searchTerm, bounds) => dispatch(fetchBusinesses(searchTerm, bounds)),
        updateBounds: (searchWords, bounds) => dispatch(updateBounds(searchWords, bounds)),
    });
}

class Search extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchWords: props.history.location.search.slice(1),
        }
    }

    componentDidUpdate(){
        if(this.state.searchWords !== this.props.history.location.search.slice(1)){
            this.props.fetchBusinesses(this.props.history.location.search.slice(1), this.props.bounds);
            this.setState({ searchWords: this.props.history.location.search.slice(1)});
        }
    }

    render(){

        let searchWords = this.state.searchWords;
        
        if(searchWords.includes("%20")){
            let arr = searchWords.split("%20");
            searchWords = arr.join(" ");
        }

        let bestPlace = "Restaurants"
        if(this.props.history.location.search){
            bestPlace = searchWords;
        }

        let bestPlaceParagraph = <><p>Best {bestPlace}</p><p> in your area!</p></>

        if(this.props.businesses.length === 0){
            bestPlaceParagraph = <><p>No Results for {bestPlace}</p><p> within your area</p></>
        }


        const businesses = this.props.businesses.map((business) => {
            return <BusinessItem business={business}
                fetchBusinesses={this.props.fetchBusinesses}
                searchWords={searchWords}
                bounds = {this.props.bounds}
                key={business.id} />
        })


        return(
            <>
        
            <MainHeader />

            <div className="search-header">
                <div className="search-header-text">
                    {bestPlaceParagraph}
                </div>
            </div>

                <div className="search-page">
                    <div className="search-container">
                        <ul className="search-results">
                                {businesses}
                        </ul>
                    </div>

                    <div className="search-map">
                    <SearchMap businesses={this.props.businesses}
                            currentUser={this.props.currentUser}
                            updateBounds={this.props.updateBounds}
                            searchWords={searchWords} />
                    </div>

                </div>


            </>
        );

    }
}


export default connect(msp,mdp)(Search)