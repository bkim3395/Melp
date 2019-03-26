# == Schema Information
#
# Table name: ratings
#
#  id          :bigint(8)        not null, primary key
#  rating      :integer          not null
#  author_id   :integer          not null
#  business_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Rating < ApplicationRecord

    validates :author_id, :business_id, presence: true, uniqueness: true
    validates :rating, presence: true

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :business,
    foreign_key: :business_id,
    class_name: :Business

end
