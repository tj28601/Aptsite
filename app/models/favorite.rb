class Favorite < ApplicationRecord

  belongs_to :apartment
  belongs_to :user

  validates :apartment_id, presence: true
  validates :user_id, presence: true

  def lat
    self.apartment.latitude
  end

  def long
    self.apartment.longitude
  end

  def address
    self.apartment.address
  end
end
