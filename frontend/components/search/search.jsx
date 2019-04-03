import React from 'react'
import { connect } from 'react-redux';
import { fetchBusinesses } 
from '../../actions/business_actions';
import BusinessItem from './business_item';
import MainHeader from '../header/main_header'

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
        this.state = {
            searchWords: props.history.location.search.slice(1),
            haveUpdatedOnce: false,
        }
    }

    componentDidMount(){
        const searchTerm = this.props.history.location.search.slice(1);
        this.props.fetchBusinesses(searchTerm);
    }

    // componentDidUpdate(){
    //     debugger;
    //     if(!this.state.haveUpdatedOnce){
    //         this.setState({
    //             searchWords: this.props.businesses[0].cuisine,
    //             haveUpdatedOnce: true
    //         });
    //     }
    // }

    render(){

        if(this.state.searchWords.includes("%20")){
            let arr = this.state.searchWords.split("%20");
            this.state.searchWords = arr.join(" ");
        }

        let bestPlace = "Places"
        if(this.props.history.location.search){
            bestPlace = this.state.searchWords;
        }


        const businesses = this.props.businesses.map((business) => {
            return <BusinessItem business={business}
                fetchBusinesses={this.props.fetchBusinesses}
                searchWords={this.state.searchWords}
                key={business.id} />
        })


        return(
            <>
        
            <MainHeader />

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