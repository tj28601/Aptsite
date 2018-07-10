require 'rails_helper'

RSpec.configure do |config|
  config.include(Shoulda::Matchers::ActiveRecord, type: :model)
end

RSpec.describe User, type: :model do

  it 'has a matching password confirmation for the password' do
  user = User.new
  user.password = 'password'
  user.password_confirmation = 'otherpassword'

  expect(user).to_not be_valid
  expect(user.errors[:password_confirmation]).to_not be_blank
end


  describe "#admin?" do
  it "is not an admin if the role is not admin" do
    user = FactoryBot.create(:user, role: "member")
    expect(user.admin?).to eq(false)
  end

  it "is an admin if the role is admin" do
    user = FactoryBot.create(:user, role: "admin")
    expect(user.admin?).to eq(true)
  end
end

describe 'validations' do
    it { should have_valid(:email).when('newemail@example.com') }
    it { should_not have_valid(:email).when("") }

    it 'should fail for duplicate user name' do
      user = FactoryBot.create(:user, role: "admin")
      
      should_not have_valid(:email).when(user.email)
    end
  end
end
