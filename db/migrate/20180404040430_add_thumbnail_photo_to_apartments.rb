class AddThumbnailPhotoToApartments < ActiveRecord::Migration[5.1]
  def change
    add_column :apartments, :thumbnail_photo, :string
  end
end
