class CreateApartments < ActiveRecord::Migration[5.1]
  def change
    create_table :apartments do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :price, null: false
      t.string :address, null: false
      t.string :bedrooms, null: false
      t.string :bathrooms, null: false
      t.string :sq_ft
      t.string :pets
      t.date :date_available

      t.timestamps
    end
  end
end
