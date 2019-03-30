json.business do
    json.partial! "api/businesses/business", business: @business
end

json.review do
    json.partial! "api/businesses/review", reviews: @reviews
end

json.users do
    @reviews.each do |review|
        json.partial! "api/businesses/user", user: review.author
    end
end