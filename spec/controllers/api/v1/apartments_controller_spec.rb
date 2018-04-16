require 'rails_helper'
# RSpec.describe ApartmentsController, :type => :controller do
#   include Devise::TestHelpers
RSpec.describe Api::V1::ApartmentsController, type: :controller do

  apartment_1 = Apartment.create!(
    title: "Amazing Apartment",
    description: "This historic apt is in the heart of Beacon Hill. Come check it out before it's too late!",
    price: "$1700",
    address: '13 4th St Boston, MA 02147',
    bedrooms: '3',
    bathrooms: '3'
    )


apartment_2 = Apartment.create!(
    title: "Cool Apartment",
    description: "Amazing place in the Seaport District!",
    price: "$2200",
    address: '28 7th St Boston, MA 02123',
    bedrooms: '3',
    bathrooms: '4'
    )


  describe "GET#index" do
    it "should return our apartments" do
      # sign_in :user, user5
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      # expect(returned_json["apartments"].length).to eq 5
      expect(returned_json["apartments"][0]["title"]).to eq "Amazing Apartment"
      expect(returned_json["apartments"][0]["bedrooms"]).to eq "3"
      expect(returned_json["apartments"][0]["bathrooms"]).to eq "3"
      expect(returned_json["apartments"][1]["title"]).to eq "Cool Apartment"

    end
  end
  # describe "#new" do
  #   it "apartment new" do
  #     admin = FactoryBot.create(:user, role: "admin")
  #     apartment = Apartment.create(  title: "Amazing Apartment",
  #       description: "This apt is in Beacon Hill. Come check it out before it's too late!",
  #       price: "$1800",
  #       address: '17 4th St Boston, MA 02147',
  #       bedrooms: '4',
  #       bathrooms: '2')
  #
  #     sign_in(admin)
  #
  #     get :new
  #
  #     returned_json = response.body
  #     expect(response.status).to eq 200
  #   end
  # end

  # describe "#new" do
  #       it "apartment new" do
  #         admin = FactoryBot.create(:user, role: "admin")
  #         apartment = Apartment.create(  title: "Amazing Apartment",
  #           description: "This apt is in Beacon Hill. Come check it out before it's too late!",
  #           price: "$1800",
  #           address: '17 4th St Boston, MA 02147',
  #           bedrooms: '4',
  #           bathrooms: '2')
  #
  #         sign_in(admin)
  #
  #         get :new, params: { id: apartment.id }
  #
  #     returned_json = response.body
  #     expect(response.status).to eq 200
  #   end
  # end
end
