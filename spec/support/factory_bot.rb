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
    address "12 Washington St"
    bedrooms "3"
    bathrooms "2"
    pets "No pets allowed."
  end
end

  FactoryBot.define do
    factory :favorite do

    end
  end
  # FactoryBot.define do
  #   factory :photo do
  #     photo_description "Photo Description"
  #     image "2"
  #   end
# end
