import React from 'react'
import { postReview, fetchBusiness } from '../../actions/business_actions'
import { clearErrors } from '../../actions/session_actions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import InputHeader from '../header/input_header'

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
            photos: [],
            selected: "0",
            starSelected: "0"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
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
            this.setState({[field]: e.target.value,
                            selected: e.target.value,
                            starSelected: e.target.value})
        }
    }

    handleMouseEnter(e){
        this.setState({starSelected: e.target.value})
        
    }

    handleMouseLeave(e){
        this.setState({starSelected: this.state.selected,})
        
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

        let starWrapper = `starWrapper-${this.state.starSelected}`

        return(
        <>
        <InputHeader />
        <form className="review-form" onSubmit={this.handleSubmit}>
        <div className={starWrapper}>
            <li className="star">            
                <input type="radio" name="rating" value="1" onClick={this.handleInput("rating")}
                onMouseEnter={this.handleMouseEnter} 
                onMouseLeave={this.handleMouseLeave}
                />
            </li>
            <li className="star">
                <input type="radio" name="rating" value="2" onClick={this.handleInput("rating")} 
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                />
            </li>
            <li className="star">
                <input type="radio" name="rating" value="3" onClick={this.handleInput("rating")} 
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                />
            </li>
            <li className="star">
                <input type="radio" name="rating" value="4" onClick={this.handleInput("rating")}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                />
            </li>
            <li className="star">
                <input type="radio" name="rating" value="5" onClick={this.handleInput("rating")} 
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                />
            </li>
        </div>
        <label>Body:
            <textarea value={this.state.body} onChange={this.handleInput("body")}
            placeholder="Please write your review!"></textarea>
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
