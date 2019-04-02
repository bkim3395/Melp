json.set! user.id do
    json.extract! user, :id, :email, :first_name, :last_name, :latitude, :longitude
    json.reviews_count user.reviews.length
    json.photos_count user.photos_count
    json.photoUrl url_for(user.photo)
end