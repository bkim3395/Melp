# == Schema Information
#
# Table name: reviews
#
#  id          :bigint(8)        not null, primary key
#  body        :string           not null
#  author_id   :integer          not null
#  business_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  rating      :integer          not null
#

class Review < ApplicationRecord

    validates :author_id, :business_id, :body, :rating, presence: true
    validate :cannot_post_review_twice

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :business,
    foreign_key: :business_id,
    class_name: :Business

    has_many_attached :photos
    
    def cannot_post_review_twice
        business = Business.find_by(id: business_id)
        business.reviews.each do |review|
            if review.author_id == author_id
                errors.messages[:author_id] << "You can't post twice in same business!"
            end
        end
    end


end
