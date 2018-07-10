require 'rails_helper'

RSpec.describe Contact, type: :model do
  describe 'validations' do
    it { should have_valid(:name).when('John Smith') }
    it { should have_valid(:email).when('johnsmith@gmail.com') }
    it { should have_valid(:message).when('Do you have any other properties not listed currently?') }

    it { should_not have_valid(:name).when("") }
    it { should_not have_valid(:email).when("") }
    it { should_not have_valid(:message).when("") }
    
    end
  end
