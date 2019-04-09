import React from 'react'
import { postReview, fetchBusiness } from '../../actions/business_actions'
import { clearErrors } from '../../actions/session_actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import InputHeader from '../header/input_header'

const msp = (state, ownProps) => {
    return ({
        currentUser: state.session.currentUser,
        errors: state.errors.reviews,
        reviews: Object.values(state.entities.reviews),
        business: state.entities.businesses[ownProps.match.params.businessId]
    })
}

const mdp = (dispatch) => {
    return ({
        postReview: (formData) => dispatch(postReview(formData)),
        clearErrors: () => dispatch(clearErrors()),
        fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    })
}

class Review extends React.Component {

    constructor(props) {
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

    componentDidMount() {
        this.props.clearErrors();
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    handleSubmit(e) {
        e.preventDefault;
        const { rating, body, author_id, business_id, photos } = this.state;
        const formData = new FormData();
        debugger
        formData.append("review[rating]", rating);
        formData.append("review[body]", body);
        formData.append("review[author_id]", author_id);
        formData.append("review[business_id]", business_id);

        let fileSize = 0.0;
        if (photos.length !== 0) {
            for (let i = 0; i < photos.length; i++) {
                formData.append("review[photos][]", photos[i]);
                fileSize += photos[i].size;
            }
        }

        //Conversion from bytes to kilobytes
        fileSize /= 1000;

        //If less than 1 mB (1000 kB), submit review.
        if(fileSize < 1000){
            this.props.postReview(formData);
        }
        else{
            alert("Your files must not exceed 1 mB!")
        }
    }

    handleInput(field) {
        return (e) => {
            if(field === "rating"){
                this.setState({
                    [field]: e.target.value,
                    selected: e.target.value,
                    starSelected: e.target.value
                })
            }
            else{
                this.setState({
                    [field]: e.target.value,
                })
            }

        }
    }

    handleMouseEnter(e) {
        this.setState({ starSelected: e.target.value })

    }

    handleMouseLeave(e) {
        this.setState({ starSelected: this.state.selected, })

    }


    render() {

        let errors = this.props.errors.map((ele, idx) => {
            if (ele.includes("Author")) {
                return (<ul key={idx}>You can't post to a business you already reviewed!</ul>)
            }
            else {
                return (<ul key={idx}>{ele}</ul>);
            }
        });

        let starWrapper = `starWrapper-${this.state.starSelected}`

        let starDescription;

        switch (this.state.starSelected) {
            case "0":
                starDescription = <p>Select your rating</p>
                break;
            case "1":
                starDescription = <p>Eek! Methinks not.</p>
                break;
            case "2":
                starDescription = <p>Meh. I've experienced better.</p>
                break;
            case "3":
                starDescription = <p>A-OK.</p>
                break;
            case "4":
                starDescription = <p>Yay! I'm a fan.</p>
                break;
            case "5":
                starDescription = <p>Woohoo! As good as it gets!</p>
                break;
        }

        let businessLink;

        if(this.props.business){
            businessLink = <Link className="business-link"
            to={`/business/${this.state.business_id}`}>{this.props.business.name}</Link>
        }

        const placeHolderText = "Your review helps others learn about great local businesses.\n\nPlease don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees."

        return (<>
                <InputHeader />
            <div className="review-complete-wrapper-wrapper">
                <div className="review-complete-wrapper">
                <div className="businessNameWrap">{businessLink}</div>
                <form className="review-form" onSubmit={this.handleSubmit}>
                    <div className="review-form-input">
                        <div className="star-form">
                            <div className={starWrapper}>
                                <li className="star">
                                    <button type="button" value="1" onClick={this.handleInput("rating")}
                                        onMouseEnter={this.handleMouseEnter}
                                        onMouseLeave={this.handleMouseLeave}
                                    />
                                </li>
                                <li className="star">
                                    <button type="button" value="2" onClick={this.handleInput("rating")}
                                        onMouseEnter={this.handleMouseEnter}
                                        onMouseLeave={this.handleMouseLeave}
                                    />
                                </li>
                                <li className="star">
                                    <button type="button" value="3" onClick={this.handleInput("rating")}
                                        onMouseEnter={this.handleMouseEnter}
                                        onMouseLeave={this.handleMouseLeave}
                                    />
                                </li>
                                <li className="star">
                                    <button type="button" value="4" onClick={this.handleInput("rating")}
                                        onMouseEnter={this.handleMouseEnter}
                                        onMouseLeave={this.handleMouseLeave}
                                    />
                                </li>
                                <li className="star">
                                    <button type="button" value="5" onClick={this.handleInput("rating")}
                                        onMouseEnter={this.handleMouseEnter}
                                        onMouseLeave={this.handleMouseLeave}
                                    />
                                </li>
                            </div>
                            <div className="star-description">{starDescription}</div>
                        </div>

                        <label>
                            <textarea className="review-text" value={this.state.body} onChange={this.handleInput("body")}
                                placeholder= {placeHolderText}
                            ></textarea>
                        </label>
                    </div>
                    <div className="review-form-second-part">
                    <label>Submit Photos:
                    <input
                            className="photo-input"
                            type="file"
                            onChange={e => this.setState({ photos: e.target.files })}
                            multiple
                        />
                    </label>
                    <input className="review-submit" type="submit" value="Submit Your Review!" />
                    </div>
                </form>
                <ul>{errors}</ul>
            </div>
            </div>
        </>
        )
    }
}

export default connect(msp, mdp)(Review)
