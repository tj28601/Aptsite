class PhotoSerializer < ActiveModel::Serializer
  attributes :apartment_id, :id, :photo_description, :image
end
