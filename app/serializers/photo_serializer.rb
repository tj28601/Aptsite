class PhotoSerializer < ActiveModel::Serializer
  attributes :id,
  :apartment_id,
  :photo_description,
  :image,
  :image_url
end
