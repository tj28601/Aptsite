# require 'rails_helper'
#
# RSpec.describe Api::V1::ApartmentsController, type: :controller do
#   let!(:user8) {FactoryBot.create(:user, role: "admin", email: "joemcgrath@gmail.com", user_name: "horse")}
#   let!(:user9) {FactoryBot.create(:user, role: "member", email: "veryaveragejoe@gmail.com", user_name: "tiger")}
#
#
#   let!(:newapartment) { Apartment.create(
#     title: "Amazing Apartment",
#     description: "This historic apt is in the heart of Beacon Hill. Come check it out before it's too late!",
#     price: "$1700",
#     address: '13 4th St Boston, MA 02147',
#     bedrooms: '3',
#     bathrooms: '3'
#     )
#   }
#   let!(:newapartment2) { Apartment.new(
#     title: "Another Amazing Apartment",
#     description: "Another historic apt is in the heart of Beacon Hill. Come check it out before it's too late!",
#     price: "$1800",
#     address: '78 4th St Boston, MA 02567',
#     bedrooms: '2',
#     bathrooms: '5'
#     )
#   }
#
#   let!(:newapartment3) { Apartment.create(
#     title: "Cool Apartment",
#     description: "Amazing place in the Seaport District!",
#     price: "$2200",
#     address: '28 7th St Boston, MA 02123',
#     bedrooms: '3',
#     bathrooms: '4'
#     )
#   }
#
#
#
#
#
#   describe "GET#index" do
#     it "should return our apartments" do
#       # sign_in :user, user5
#       get :index
#       returned_json = JSON.parse(response.body)
#
#       expect(response.status).to eq 200
#       expect(response.content_type).to eq("application/json")
#       expect(returned_json["apartments"].length).to eq 2
#       expect(returned_json["apartments"][0]["title"]).to eq "Amazing Apartment"
#       expect(returned_json["apartments"][1]["title"]).to eq "Cool Apartment"
#     end
#   end
#
#
# end
