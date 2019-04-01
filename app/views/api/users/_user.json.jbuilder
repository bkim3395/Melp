json.extract! user, :id, :email, :first_name, :last_name, :latitude, :longitude
json.photoUrl url_for(user.photo)