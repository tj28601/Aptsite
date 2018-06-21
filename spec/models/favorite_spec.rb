require 'rails_helper'

RSpec.configure do |config|
  config.include(Shoulda::Matchers::ActiveRecord, type: :model)
end

RSpec.describe Favorite, type: :model do
  describe 'validations' do
    it { should have_valid(:user_id).when(1) }
    it { should have_valid(:apartment_id).when(1) }


    it { should_not have_valid(:user_id).when('') }
    it { should_not have_valid(:apartment_id).when('') }

    # it { should belong_to :apartment }
    # it { should belong_to :user }
    it { should belong_to(:apartment) }
    it { should belong_to(:user) }

#   describe "lat" do
#     apt = FactoryBot.create(:apartment)
#     user = FactoryBot.create(:user)
#     # favorite= FactoryBot.create(:favorite, apartment: apt)
#       let!(:fav) {FactoryBot.create(:favorite, apartment: apt, user_id: user.id, apartment_id: apt.id)}
#   it "should be the latitude coordinate of the address being favorited" do
#     lat=self.apartment.latitude
#     expect(fav.lat).to eq(42.3432497)
#
#     # result = plus_one(0)
#     # expect(result).to eq(1)
#   end
# end
    # end
  end
end
