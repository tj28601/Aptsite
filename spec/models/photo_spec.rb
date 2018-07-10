require 'rails_helper'

RSpec.configure do |config|
  config.include(Shoulda::Matchers::ActiveRecord, type: :model)
end

RSpec.describe Photo do
  describe 'photo model creation' do
    it 'returns list of photos' do
      user_variable_two = FactoryBot.create(:user)

      apartment = FactoryBot.create(:apartment)
      photo = Photo.create!(apartment_id: apartment.id, photo_description: "this is a photo description", image: "photo.png")
      photos_array = Photo.all

      expect(photos_array).to include(photo)
    end
  end
end

RSpec.describe Photo, type: :model do
  describe 'validations' do
    it { should have_valid(:apartment_id).when(2) }
    it { should_not have_valid(:apartment_id).when("") }
    it { should belong_to :apartment }
    end
  end
