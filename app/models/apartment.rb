
class Apartment < ApplicationRecord

   # acts_as_mappable :auto_geocode=>{:field=>:address, :error_message=>'Could not geocode address'}
  # :auto_geocode=>{:field=>:address, :error_message=>'Could not geocode address'}
  # :lat_column_name => :lat
  # :lng_column_name => :lng

  # include Geokit::Geocoders
  # location = ApartmentGeocoder.geocode(address)

  geocoded_by :address   # can also be an IP address
  after_validation :geocode        # auto-fetch coordinates

  validates :title, presence: true
  validates :description, presence: true
  validates :price, presence: true
  validates :address, presence: true
  validates :bedrooms, presence: true
  validates :bathrooms, presence: true
  validates :pets, presence: true

  has_many :photos

  # def date_display
  #   if !self.date_available == nil
  #   self.date_available.strftime("%m/%d/%Y")
  # end

    def date_display
    if self.date_available.nil?
      "TBA"
else
    self.date_available.strftime("%m/%d/%Y")
  end
end



  mount_uploader :thumbnail_photo, ThumbnailPhotoUploader

  accepts_nested_attributes_for :photos, allow_destroy: true

end
