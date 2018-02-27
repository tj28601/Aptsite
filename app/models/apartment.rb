class Apartment < ApplicationRecord
  validates :title, null: false
  validates :description, null: false
  validates :price, presence: true
  validates :address, presence: true
  validates :bedrooms, presence: true
  validates :bathrooms, presence: true
end
