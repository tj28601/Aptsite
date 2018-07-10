class PhotoSerializer < ActiveModel::Serializer
  attributes :id,
  :apartment_id,
  :photo_description,
  :image_url
end
