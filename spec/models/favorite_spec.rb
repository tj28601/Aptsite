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

  end
end
