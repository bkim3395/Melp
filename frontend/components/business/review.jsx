import React from 'react'
import { postReview, fetchBusiness } from '../../actions/business_actions'
import { clearErrors } from '../../actions/session_actions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const msp = (state) => {

    return({
        currentUser: state.session.currentUser,
        errors: state.errors.reviews,
        reviews: Object.values(state.entities.reviews),
    })
}

const mdp = (dispatch) => {
    return({
        postReview: (review) => dispatch(postReview(review)),
        clearErrors: () => dispatch(clearErrors()),
        // fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    })
}

class Review extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            rating: "",
            body: "",
            author_id: this.props.currentUser,
            business_id: this.props.match.params.businessId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount(){
        this.props.clearErrors();
    }

    handleSubmit(e){
        e.preventDefault;
        this.props.postReview(this.state)
        this.props.history.push(`/business/${this.state.business_id}`)
    }

    handleInput(field){
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }


    render(){

        let errors = this.props.errors.map((ele, idx) => {
            if(ele.includes("Author")){
                return(<ul key={idx}>You can't post to a business you already reviewed!</ul>)
            }
            else{
                return (<ul key={idx}>{ele}</ul>);
            }
        });

        return(
        <>
        <form className="review-form" onSubmit={this.handleSubmit}>
        <label>Body:
            <textarea value={this.state.body} onChange={this.handleInput("body")}
            placeholder="Please write your review!"></textarea>
        </label>
        <label>Rating:
            <input type="radio" name="rating" value="1" onClick={this.handleInput("rating")} />
            <input type="radio" name="rating" value="2" onClick={this.handleInput("rating")} />
            <input type="radio" name="rating" value="3" onClick={this.handleInput("rating")} />
            <input type="radio" name="rating" value="4" onClick={this.handleInput("rating")} />
            <input type="radio" name="rating" value="5" onClick={this.handleInput("rating")} />
        </label>
        <input type="submit" value="Submit Your Review!" />
        </form>
        <ul>{errors}</ul>
        </>
        )}
}

export default connect(msp, mdp)(Review)
