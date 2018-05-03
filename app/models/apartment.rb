class Apartment < ApplicationRecord

  validates :title, presence: true
  validates :description, presence: true
  validates :price, presence: true
  validates :address, presence: true
  validates :bedrooms, presence: true
  validates :bathrooms, presence: true

  has_many :photos

  def date_display
    self.date_available.strftime("%m/%d/%Y")
  end

  mount_uploader :thumbnail_photo, ThumbnailPhotoUploader

  accepts_nested_attributes_for :photos, allow_destroy: true

end
