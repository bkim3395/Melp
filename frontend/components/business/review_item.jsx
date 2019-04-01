import React from 'react';

export default ({review, user}) => {


    const reviewImg = review.photoUrls.map((photo, idx) => {
        return(<img key={idx}  src={photo} />)
    })

    return(<li>
        <p>{user.first_name.concat(" ", user.last_name)}</p>
        <img src={user.photoUrl} />

        <p>{review.rating}</p>

        <p>{review.body}</p>

        {reviewImg}

    </li>)
}