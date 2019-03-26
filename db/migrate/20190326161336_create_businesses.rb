class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
    t.float :latitude, null: false
    t.float :longitude, null: false
    t.string :name, null: false
    t.string :cuisine, null: false
    t.string :address, null: false
    t.string :phone_number, null: false
    t.string :website, null: false
    t.timestamps
    end
  end
end
