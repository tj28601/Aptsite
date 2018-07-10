class Photo < ApplicationRecord

  belongs_to :apartment
  validates :apartment_id, presence: true

  mount_uploader :image, ApartmentPhotoUploader
  
end
