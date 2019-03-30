import React from 'react';

export default ({review, users}) => {
    return(<li>
        <p>{users[review.author_id].first_name.concat(" ", users[review.author_id].last_name)}</p>

        <p>{review.rating}</p>

        <p>{review.body}</p>

    </li>)
}