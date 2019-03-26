class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
    t.integer :rating, null: false
    t.integer :author_id, null: false
    t.integer :business_id, null: false
    t.timestamps
    end
    add_index :ratings, :author_id
    add_index :ratings, :business_id
  end
end
