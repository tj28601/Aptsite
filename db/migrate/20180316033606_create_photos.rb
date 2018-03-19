class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.integer :apartment_id, null: false
      t.string :photo_description
      t.string :image


      t.timestamps
    end
  end
end
