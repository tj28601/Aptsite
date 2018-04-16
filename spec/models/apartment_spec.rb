require 'rails_helper'

RSpec.configure do |config|
  config.include(Shoulda::Matchers::ActiveRecord, type: :model)
end

RSpec.describe Apartment do
  describe 'apartment model creation' do
    it 'returns list of apartments' do
      user = FactoryBot.create(:user, role: "admin")

      apartment_1 = FactoryBot.create(:apartment)
      apartment_2 = FactoryBot.create(:apartment)

      apartments = Apartment.all

      expect(apartments).to include(apartment_1)
      expect(apartments).to include(apartment_2)
    end
  end
end
RSpec.describe Apartment, type: :model do
  describe 'validations' do
    it { should have_valid(:title).when('Apt title') }
    it { should have_valid(:description).when('Apt description') }
    it { should have_valid(:price).when('$2300') }
    it { should have_valid(:address).when('Apt description') }
    it { should have_valid(:bedrooms).when('4') }
    it { should have_valid(:bathrooms).when('2') }

    it { should_not have_valid(:title).when("") }
    it { should_not have_valid(:description).when("") }
    it { should_not have_valid(:price).when("") }
    it { should_not have_valid(:address).when("") }
    it { should_not have_valid(:bedrooms).when("") }
    it { should_not have_valid(:bathrooms).when("") }

    it { should have_many :photos }
    end
  end


#     validates , presence: true
#     validates :description, presence: true
#     validates :price, presence: true
#     validates :address, presence: true
#     validates :bedrooms, presence: true
#     validates :bathrooms, presence: true
#   end
# end
