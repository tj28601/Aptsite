require 'rails_helper'

RSpec.describe Api::V1::ApartmentsController, type: :controller do
  let!(:user1) {FactoryBot.create(:user, role: "admin")}
  let!(:user2) {FactoryBot.create(:user, role: "member")}


  let!(:newapartment) { Apartment.create(
    title: "Amazing Apartment",
    description: "This historic apt is in the heart of Beacon Hill. Come check it out before it's too late!",
    price: "$1700",
    address: '13 4th St Boston, MA 02147',
    bedrooms: '3',
    bathrooms: '3'
    )
  }
  let!(:newapartment) { Apartment.new(
    title: "Amazing Apartment",
    description: "This historic apt is in the heart of Beacon Hill. Come check it out before it's too late!",
    price: "$1700",
    address: '13 4th St Boston, MA 02147',
    bedrooms: '3',
    bathrooms: '3'
    )
  }

  let!(:apartment_photo) { Photo.create(
    description: 'Beautiful living room!'
    image: ''
    )
  }

  let!(:install) { Wizard.create(
    name: "Microsoft",
    description: "Installation Wizard",
    img_url: "www.microsoft.com",
    creator_id: user1.id,
    magic_school: school,
    origin: "William Gates"
    )
  }

  describe "GET#index" do
    it "should return our apartments" do
      sign_in :user, user1
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json["wizards"].length).to eq 2
      expect(returned_json["wizards"][0]["name"]).to eq "Clippy"
      expect(returned_json["wizards"][1]["name"]).to eq "Microsoft"
    end
  end

  describe "GET#show" do
    it "should return our review" do
      sign_in :user, user1
      get :show, params:{ id: newapartment.id }
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json["wizard"]["reviews"][0]["body"]).to eq "Clippy is not ideal."
    end
  end
end
