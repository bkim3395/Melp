json.set! business.id do
    json.extract! business, :id, :latitude, :longitude, :name, 
    :cuisine, :address, :phone_number, :website
    json.photoUrls business.photos.map { |file| url_for(file)}
    json.rating business.calculate_ratings
    json.reviews_count reviews.length
    json.review_sample reviews.first
end
