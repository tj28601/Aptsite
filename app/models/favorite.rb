class Favorite < ApplicationRecord
# attr_accessor :apartment
  belongs_to :apartment
  belongs_to :user
#   geocoded_by :address
#   after_validation :geocode
#
#   validates :title, presence: true
#   validates :description, presence: true
#   validates :price, presence: true
#   validates :address, presence: true
#   validates :bedrooms, presence: true
#   validates :bathrooms, presence: true
#   validates :pets, presence: true
# def initialize(apartment)
#   @apartment = apartment
# end
# def apartment
#   @apartment
# end
# def initialize(apartment)
#   @apartment = apartment
# end
#
def lat
  self.apartment.latitude
end

def long
  self.apartment.longitude
end

def address
  self.apartment.address
end

# def apartment
#   self.apartment
# end


#   has_many :photos
#   def date_display
#     if self.date_available.nil?
#         "TBA"
#     else
#       self.date_available.strftime("%m/%d/%Y")
#     end
#   end
# mount_uploader :thumbnail_photo, ThumbnailPhotoUploader
# accepts_nested_attributes_for :photos, allow_destroy: true
end
