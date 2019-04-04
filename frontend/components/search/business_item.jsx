import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const businessItem = ({ business, searchWords, history }) => {

    const img = (<img src={business.photoUrls[0]} />)

    let reviewSample;
    if (business.review_sample) {
        let sample = business.review_sample.body.slice(0, 150);
        reviewSample = (<><p className="review-sample">{`"${sample}..."`}
            <Link className="review-sample-anchor"
                to={{
                    pathname: `/business/${business.id}`,
                    search: searchWords,
                }}>read more</Link></p>
        </>)
    }
    else {
        reviewSample = (
            <Link className="review-sample-404"
                to={{
                    pathname: `/business/${business.id}`,
                    search: searchWords,
                }}>Opps! Nobody reviewed this business yet.
                    Be first to rate this business!</Link>);
    }


    const businessTitle = (<Link className="bi-title"
        to={{
            pathname: `/business/${business.id}`,
            search: searchWords,
        }}><span>{business.name}</span></Link>);

    
    const cuisineLink = (<a onClick={() => {history.push(`/search?${business.cuisine}`)}}>
                        <span>{business.cuisine}</span></a>)


    let location = business.address.split(', ');
    let address1 = location[0];
    let address2 = location[1].concat(', ', location[2]);
    const address = (<><p>{address1}</p><p>{address2}</p></>);


    return (
        <div className="business-item">
            <div className="business-item-img">
                {img}
            </div>
            <div className="business-item-info">
                <div className="business-item-info-header">
                    <div className="bi-info-header-1">
                        {businessTitle}
                        <div className={`br-mid-${business.rating}`}></div>
                        {cuisineLink}
                    </div>
                    <div className="bi-info-header-2">
                        <p>{business.phone_number}</p>
                        {address}
                    </div>
                </div>
                <div className="business-item-into-review">
                    {reviewSample}
                </div>
            </div>
        </div>
    );
}

export default withRouter(businessItem);