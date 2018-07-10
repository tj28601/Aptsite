class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :apartment_id, :apartment
end
