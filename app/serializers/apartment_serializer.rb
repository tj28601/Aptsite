class ApartmentSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :address, :bedrooms, :bathrooms, :sq_ft, :pets, :date_available, :thumbnail_photo, :date_display

end
