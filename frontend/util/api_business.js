export const postReview = (formData) => {
    return ($.ajax({
        url: "/api/reviews",
        method: "POST",
        data: formData,
        contentType: false,
        processData: false,
    }))
};

export const deleteReview = (reviewId) => {
    return ($.ajax({
        method: "DELETE",
        url: `/api/reviews/${reviewId}`,
    }))
}

export const fetchBusiness = (businessId) => {
    return ($.ajax({
        url: `/api/businesses/${businessId}`,
        method: "GET",
    }))
};


export const fetchBusinesses = () => {
    return ($.ajax({
        url: '/api/businesses',
        method: "GET",
    }))
};