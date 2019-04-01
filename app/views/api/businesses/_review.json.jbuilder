reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :body, :author_id, :business_id, :rating
        json.photoUrls review.photos.map { |file| url_for(file)}
    end
end