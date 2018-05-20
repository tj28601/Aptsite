class FavoriteSerializer < ActiveModel::Serializer
  attributes :user_id,
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
   :thumbnail_photo_url,
   :latitude,
   :longitude
end
