import React from 'react';
import { deleteReview } from '../../actions/business_actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';

const msp = (state) => {
    return({
        currentUser: state.session.currentUser,
    })
}

const mdp = (dispatch) => {
    return({
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    })
}

const review_item = ({review, user, deleteReview, currentUser}) => {

    //RETRIVING REVIEW PHOTOS///////////
    let reviewImg;
    if(review.photoUrls){
        if(review.photoUrls.length !== 0){
        reviewImg = review.photoUrls.map((photo, idx) => {
            return(<img key={idx}  src={photo} />)
        })}
    }
    ////////////////////////////////////
    
    let deleteButton;

    if(review.author_id === currentUser){
        deleteButton = (<div className="delete_button">
        <               button onClick={() => deleteReview(review.id)}>
                        <FontAwesomeIcon icon="trash-alt" /></button>
                        </div>);
    }

    return(<li>
        <div className="review-item">
            <div className="ri-userinfo">
                <img className="profile-img" src={user.photoUrl} />
                <div>
                    <p className="profile-name">{user.first_name.concat(" ", user.last_name)}
                    </p>
                    <p className="profile-small"><FontAwesomeIcon icon="star" />
                    {`${user.reviews_count} reviews`}
                    </p>
                    <p className="profile-small"><FontAwesomeIcon icon="camera" />
                    {`${user.photos_count} photos`}
                    </p>

                </div>
            </div>
            <div className="ri-body">
                <div className={`br-mid-${review.rating}`}></div>
                <p>{review.body}</p>
                {deleteButton}
                <div className="review-imgs">
                    {reviewImg}
                </div>
            </div>



        
        
        </div>
    </li>)
}

export default connect(msp,mdp)(review_item);