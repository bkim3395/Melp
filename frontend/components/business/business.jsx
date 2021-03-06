import React from 'react'
import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions'
import MainHeader from '../header/main_header'
import ReviewItem from './review_item'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BusinessMap from './business_map'


const msp = (state,ownProps) => {
    return ({
        business: state.entities.businesses[ownProps.match.params.businessId] || null,
        reviews: Object.values(state.entities.reviews),
        users: state.entities.users,
        currentUser: state.session.currentUser,
    });
}

const mdp = (dispatch) => {
    return({
        fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    })
}

class Business extends React.Component{

    constructor(props){
        super(props);
        this.handleCuisineRedirect = this.handleCuisineRedirect.bind(this);
    }

    //Deals with Rendering the page -> Fetch business after first render
    //Update makes sure that, if move to another business page directly,
    //correct business is fetched.
    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId);
    }

    componentDidUpdate(prevProps){
        if (this.props.match.params.businessId !== prevProps.match.params.businessId){
            this.props.fetchBusiness(this.props.match.params.businessId);
        }
    }
    //////////////////////////////////////////////////////////////////////////

    handleCuisineRedirect(){
        this.props.history.push({
            pathname: "/search",
            search: this.business.cuisine,
        })
    }

    //////////////////////////////////////////////////////////////////////////
    render(){
        
        //For easy access//
        this.businessId = this.props.match.params.businessId;
        this.business = this.props.business;
        ///////////////////

        //To generate Submit Review button if logged in and hasn't submit review yet
        let reviewLink;
        let alreadySubmitted = false;
        const that = this

        this.props.reviews.forEach((review) => {
            if (review.author_id === that.props.currentUser) {
                alreadySubmitted = true;
            }
        })

        if (!alreadySubmitted && Boolean(this.props.currentUser)) {
            reviewLink = (
                <Link className="review-link" to={`/business/${this.props.match.params.businessId}/review`}>
                    <FontAwesomeIcon icon="star" /> Write a Review</Link>
            );
        }
        ////////////////////////////////////////////////////////////////////////////

        //Generating Review Items for Rendering//
        const reviews = this.props.reviews.map((review) => {
            return <ReviewItem key={review.id} review={review} user={this.props.users[review.author_id]} />
        })
        /////////////////////////////////////////


        //ACTUAL RENDERING////////////////////////////////////////////////////
        if(this.business) {
            const businessImg = this.business.photoUrls.map((photo, idx) => {
                return (<img key={idx} src={photo} />)
            })
            
            let location = this.business.address.split(', ');
            let address1 = location[0];
            let address2 = location[1].concat(', ',location[2]);


            //Generating Cuisine Redirect//
            const cuisineLink = (<p className ="cuisineLink" 
                onClick={this.handleCuisineRedirect}><span>{this.business.cuisine}</span>
                </p>)
            ///////////////////////////////

            return(<>
            <MainHeader />
            <div className="business-header">
                <div className="bh-info-container">
                <div className="bh-info">
                    <div className="bh-info-info">
                        <h1>{this.business.name}</h1>
                        <div className="bh-star-holder">
                            <div className={`br-big-${this.business.rating}`}></div>
                            <p>{`${this.business.reviews_count} reviews`}</p>
                        </div>
                            {cuisineLink}
                    </div>
                    <div className="bh-info-review">
                        {reviewLink}
                    </div>
                </div>
                </div>



                <div className="bh-images-container">
                <div className="bh-images">
                    <div className="map-container">
                        <div className="businessMap">
                            <BusinessMap business={this.business} />
                        </div>
                        <div className="map-info">
                            <div className="map-info-address">
                                <p><FontAwesomeIcon icon="map-marker-alt" />
                                    {address1}</p>
                                <p>{address2}</p>
                            </div>
                            <div className="map-info-phone">
                                <p><FontAwesomeIcon icon="phone" />
                                    {this.business.phone_number}</p>
                            </div>
                            <div className="map-info-website">
                                <p><FontAwesomeIcon icon="window-restore" />
                                    <a href={`http://${this.business.website}`}>
                                    {this.business.website}</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bh-images-list">
                            {businessImg}
                    </div>
                </div>
            </div>
            </div>


            <div className="business-reviews">
                <ul>
                {reviews}
                </ul>
            </div>




        </>)
        }
        ///////////////////////////////////////////////////////////////////
        //If Business hasn't loaded yet and is first rendering//
        else{
            return (<>
                <MainHeader />
                <p>Stand By...</p>
            </>)
        }
        ////////////////////////////////////////////////////////
    }

}

export default connect(msp,mdp)(Business)