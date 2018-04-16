require 'rails_helper'

RSpec.describe Photo, type: :model do
  describe 'validations' do
    it { should have_valid(:apartment_id).when(2) }

    it { should_not have_valid(:apartment_id).when("") }
    end
  end
