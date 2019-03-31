import React from 'react'
import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions'
import InputHeader from '../header/input_header'
import ReviewItem from './review_item'
import { Link } from 'react-router-dom'

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
        super(props)
    }

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId);
    }

    componentDidUpdate(prevProps){
        if (this.props.match.params.businessId !== prevProps.match.params.businessId){
            this.props.fetchBusiness(this.props.match.params.businessId);
        }
    }

    render(){
        this.businessId = this.props.match.params.businessId;
        this.business = this.props.business;
        let reviewLink;
        let alreadySubmitted = false;
        const that = this;

        this.props.reviews.forEach((review) => {
            if (review.author_id === that.props.currentUser) {
                alreadySubmitted = true;
            }
        })

        if (!alreadySubmitted) {
            reviewLink = (
                <Link to={`/business/${this.props.match.params.businessId}/review`}>Submit Review</Link>
            );
        }

        const reviews = this.props.reviews.map((review) => {
            return <ReviewItem key={review.id} review={review} users={this.props.users} />
        })


        if(this.business) {
            return(<>
            <InputHeader />
            <ul>
                <li key={1}>{this.business.name}</li>
                <li key={2}>{this.business.cuisine}</li>
                <li key={3}>{this.business.address}</li>
                <li key={4}>{this.business.phone_number}</li>
                <li key={5}>{this.business.website}</li>
            </ul>
            <ul>
                {reviews}
            </ul>
            {reviewLink}
        </>)
        }
        else{
            return (<>
                <InputHeader />
                <p>Stand By...</p>
            </>)
        }

    }

}

export default connect(msp,mdp)(Business)