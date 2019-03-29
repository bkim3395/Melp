json.business do
    @businesses.each do |business|
        json.partial! "api/businesses/business", business: business
    end
end