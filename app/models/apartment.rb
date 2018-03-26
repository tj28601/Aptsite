class Apartment < ApplicationRecord
  validates :title, null: false
  validates :description, null: false
  validates :price, presence: true
  validates :address, presence: true
  validates :bedrooms, presence: true
  validates :bathrooms, presence: true

has_many :photos

# has_many :photos, :inverse_of => :apartment, :dependent => :destroy
# ^^above is referenced in ex...lets go with it for now
  # has_many :photos


  # mount_uploader :photo, ApartmentPhotoUploader
  # ^^per example, now moving this to photo model

  # accepts_nested_attributes_for :photos, allow_destroy: true
    accepts_nested_attributes_for :photos, allow_destroy: true
    
  # params.require(:apartment).permit(:title, :description, :price, :address, :bedrooms, :bathrooms, :sq_ft, :pets, :date_available, photos_attributes: [:photo_description, :image, :id, :_destroy])

end
