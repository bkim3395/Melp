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
        postReview: (formData) => dispatch(postReview(formData)),
        clearErrors: () => dispatch(clearErrors()),
        fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    })
}

class Review extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            rating: "",
            body: "",
            author_id: this.props.currentUser,
            business_id: this.props.match.params.businessId,
            photos: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount(){
        this.props.clearErrors();
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    handleSubmit(e){
        e.preventDefault;
        const { rating, body, author_id, business_id , photos } = this.state;
        const formData = new FormData();
        formData.append("review[rating]", rating);
        formData.append("review[body]", body);
        formData.append("review[author_id]", author_id);
        formData.append("review[business_id]", business_id);
        if(photos.length !== 0){
            for (let i = 0; i < photos.length; i++) {
                formData.append("review[photos][]", photos[i]);
            }
        }   
        this.props.postReview(formData);
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
        <label>Submit Photos:
            <input
                type="file"
                onChange={e => this.setState({ photos: e.target.files })}
                multiple
            />
        </label>
        <input type="submit" value="Submit Your Review!" />
        </form>
        <ul>{errors}</ul>
        </>
        )}
}

export default connect(msp, mdp)(Review)
