require 'factory_bot'

  FactoryBot.define do
    factory :user do
      sequence(:email) {|n| "user#{n}@example.com" }
      password 'password'
      password_confirmation 'password'
      role 'member'
    end
  end

  FactoryBot.define do
    factory :apartment do
      description "Beautiful apartment!"
      title "apartment title"
      price "$1200"
      # address "12 Washington St"
      address "59 Symphony Rd, Boston, MA, 02115"
      bedrooms "3"
      bathrooms "2"
      pets "No pets allowed."
    end
  end

  FactoryBot.define do
    factory :favorite do

    end
  end

  FactoryBot.define do
    factory :contact do
      name "John Smith"
      email "johnsmith@gmail.com"
      message " Do you have any other properties for rent?"
    end
  end

  # FactoryBot.define do
  #   factory :photo do
  #     photo_description "Photo Description"
  #     image "2"
  #   end
# end
