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

    has_many :ratings,
    foreign_key: :business_id,
    class_name: :Rating 

    has_many :reviews,
    foreign_key: :business_id,
    class_name: :Review

    has_one_attached :photos



end
