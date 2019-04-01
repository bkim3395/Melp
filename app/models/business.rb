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
        return rounded
    end
    
    end

end
