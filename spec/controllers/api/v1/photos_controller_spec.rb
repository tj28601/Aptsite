require 'rails_helper'

RSpec.describe Api::V1::PhotosController, type: :controller do
  user = FactoryBot.create(:user, role: "admin")


  apartment = Apartment.create!(
    title: "Amazing Apartment",
    description: "Beautiful apartment!",
    price: "$1700",
    address: '13 4th St Boston, MA 02147',
    bedrooms: '3',
    bathrooms: '3'
    )

  # photo = Photo.create!(
  #   apartment_id: apartment.id,
  #   description: "Here is a photo description",
  #   image: "#{Rails.root}/spec/support/images/photo.png",
  #   )
  # }
  describe 'POST#create' do

    it 'should return a json object of the photo with a 200 response if successful'   do
      sign_in (user)

      post :create, params: { photo: { apartment_id: apartment.id, image: "google.com" , photo_description: "Here is a photo description" } }

      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["photos"][0]["photo_description"]).to eq "Here is a photo description"
    end
  end
end
