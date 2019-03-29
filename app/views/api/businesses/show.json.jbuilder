json.business do
    json.partial! "api/businesses/business", business: @business
end

json.review do
    json.partial! "api/businesses/review", reviews: @reviews
end