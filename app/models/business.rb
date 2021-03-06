# == Schema Information
#
# Table name: businesses
#
#  id           :bigint(8)        not null, primary key
#  latitude     :float            not null
#  longitude    :float            not null
#  name         :string           not null
#  cuisine      :string           not null
#  address      :string           not null
#  phone_number :string           not null
#  website      :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Business < ApplicationRecord

    validates :latitude, :longitude, :name, :cuisine, :address, :phone_number,
    :website, presence: true

    has_many :reviews,
    foreign_key: :business_id,
    class_name: :Review

    has_many_attached :photos

    def calculate_ratings
        
    if(self.reviews.length == 0)
        return 0;
    else
        sum = 0.0
        self.reviews.each{|review| sum += review.rating}
        sum /= self.reviews.length
        sum *= 2
        rounded = sum.round
        rounded = rounded.to_f
        rounded /= 2
        if(rounded == 0.5)
            return 1
        else
            return rounded
        end
    end
    
    end

    def self.bounds_search(term, bounds)

        if(term.include?("%20"))
            arr = term.split("%20")
        else
            arr = term.split(" ")
        end

        new_term = arr.join(" ")


        if(arr.length == 2 && arr[1].downcase == "food")
            cuisine = arr[0].capitalize;
            return Business.includes(:reviews).with_attached_photos.where(["cuisine iLIKE ? AND (latitude BETWEEN ? AND ?) AND (longitude BETWEEN ? AND ?)", 
                                                        "%#{cuisine.downcase}%",
                                                        bounds[:southWest][:lat] ,bounds[:northEast][:lat],
                                                        bounds[:southWest][:lng] ,bounds[:northEast][:lng]])
        elsif(new_term.downcase.include?("coffee") || new_term.downcase.include?("cafe"))
            return Business.includes(:reviews).with_attached_photos.where(["cuisine = ? AND (latitude BETWEEN ? AND ?) AND (longitude BETWEEN ? AND ?)", 
                                                        "Coffee",
                                                        bounds[:southWest][:lat] ,bounds[:northEast][:lat],
                                                        bounds[:southWest][:lng] ,bounds[:northEast][:lng]])
        else
            result = Business.includes(:reviews).with_attached_photos.where(["LOWER(name) LIKE ? AND (latitude BETWEEN ? AND ?) AND (longitude BETWEEN ? AND ?)",
                                                         "%#{new_term.downcase}%",
                                                        bounds[:southWest][:lat] ,bounds[:northEast][:lat],
                                                        bounds[:southWest][:lng] ,bounds[:northEast][:lng]])
            if(result.length == 0 && arr.length == 1)
                return Business.includes(:reviews).with_attached_photos.where(["cuisine iLIKE ? AND (latitude BETWEEN ? AND ?) AND (longitude BETWEEN ? AND ?)", 
                                                            "%#{new_term.downcase}%",  
                                                            bounds[:southWest][:lat] ,bounds[:northEast][:lat],
                                                            bounds[:southWest][:lng] ,bounds[:northEast][:lng]])
            end
            return result
        end    
    end

    def self.search(term)

        if(term.include?("%20"))
            arr = term.split("%20")
        else
            arr = term.split(" ")
        end

        new_term = arr.join(" ")


        if(arr.length == 2 && arr[1].downcase == "food")
            cuisine = arr[0].capitalize;
            return Business.includes(:reviews).with_attached_photos.where(["cuisine iLIKE ?", "%#{cuisine.downcase}%"])
        elsif(new_term.downcase.include?("coffee") || new_term.downcase.include?("cafe"))
            return Business.includes(:reviews).with_attached_photos.where(["cuisine = ?", "Coffee"])
        else
            result = Business.includes(:reviews).with_attached_photos.where("LOWER(name) LIKE ?", "%#{new_term.downcase}%" )
            if(result.length == 0 && arr.length == 1)
                return Business.includes(:reviews).with_attached_photos.where(["cuisine iLIKE ?", "%#{new_term.downcase}%"])
            end
            return result
        end    
    end

end