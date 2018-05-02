class ApartmentSerializer < ActiveModel::Serializer
  attributes
    :id,
    :title,
    :description,
    :price,
    :address,
    :bedrooms,
    :bathrooms,
    :sq_ft,
    :pets,
    :date_available,
    :date_display,
    :thumbnail_photo_url

end
