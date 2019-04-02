import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default ({review, user}) => {

    //RETRIVING REVIEW PHOTOS///////////
    let reviewImg;
    if(review.photoUrls.length !== 0){
    reviewImg = review.photoUrls.map((photo, idx) => {
        return(<img key={idx}  src={photo} />)
    })}
    ////////////////////////////////////
    
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
                <div className="review-imgs">
                    {reviewImg}
                </div>
            </div>



        
        
        </div>
    </li>)
}