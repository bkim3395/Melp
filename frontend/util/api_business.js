export const postReview = (review) => {
    return ($.ajax({
        url: "/api/reviews",
        method: "POST",
        data: {review,}
    }))
}

export const fetchBusiness = (businessId) => {
    return ($.ajax({
        url: `/api/businesses/${businessId}`,
        method: "GET",
    }))
}


export const fetchBusinesses = () => {
    return ($.ajax({
        url: '/api/businesses',
        method: "GET",
    }))
}