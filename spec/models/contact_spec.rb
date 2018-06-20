require 'rails_helper'

# RSpec.configure do |config|
#   config.include(Shoulda::Matchers::ActiveRecord, type: :model)
# end

# RSpec.describe Contact do
#   describe 'contact model creation' do
#     it 'returns list of apartments' do
#       user = FactoryBot.create(:user, role: "admin")
#
#       apartment_1 = FactoryBot.create(:apartment)
#       apartment_2 = FactoryBot.create(:apartment)
#
#       apartments = Apartment.all
#
#       expect(apartments).to include(apartment_1)
#       expect(apartments).to include(apartment_2)
#     end
#   end
# end
RSpec.describe Contact, type: :model do
  describe 'validations' do
    it { should have_valid(:name).when('John Smith') }
    it { should have_valid(:email).when('johnsmith@gmail.com') }
    it { should have_valid(:message).when('Do you have any other properties not listed currently?') }
    # it { should have_valid(:nickname).when("") }

    it { should_not have_valid(:name).when("") }
    it { should_not have_valid(:email).when("") }
    it { should_not have_valid(:message).when("") }
    # it { should_not have_valid(:nickname).when("asdf") }

    end
  end
