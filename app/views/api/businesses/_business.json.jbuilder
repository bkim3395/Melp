json.set! business.id do
    json.extract! business, :id, :latitude, :longitude, :name, 
    :cuisine, :address, :phone_number, :website
end
