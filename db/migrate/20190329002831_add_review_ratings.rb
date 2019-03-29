class AddReviewRatings < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :rating, :integer
    change_column_null :reviews, :rating, false
  end
end
