require 'rails_helper'

RSpec.describe Api::V1::FavoritesController, type: :controller do
  # let!(:user1) {FactoryBot.create(:user)}
  # let!(:user2) {FactoryBot.create(:user)}
  # let!(:user3) {FactoryBot.create(:user)}
  # user1 = FactoryBot.create(:user)
  # apartment1 = FactoryBot.create(:apartment)
  # let!(:apartment1) {FactoryBot.create(:apartment)}

  # apartment1 = Apartment.create!(
  #   title: "Amazing Apartment",
  #   description: "Beautiful apartment!",
  #   price: "$1700",
  #   address: '13 4th St Boston, MA 02147',
  #   bedrooms: '3',
  #   bathrooms: '3',
  #   pets: 'Only cats. Meow!'
  #   )

  # describe 'POST#create' do
  #
  #   it 'should return a json object of the favorite with a 200 response if succesful'   do
  #     # sign_in :user, user1
  #
  #           current_user = FactoryBot.create(:user)
  #           # goal_2 = Goal.create(name: "work out", user_id: current_user.id)
  #           # apartment1 = Apartment.create!(
  #           #   title: "Amazing Apartment",
  #           #   description: "Beautiful apartment!",
  #           #   price: "$1700",
  #           #   address: '13 4th St Boston, MA 02147',
  #           #   bedrooms: '3',
  #           #   bathrooms: '3',
  #           #   pets: 'Only cats. Meow!'
  #           #   )
  #           favorite = Favorite.create(apartment_id: 1, user_id: current_user.id)
  #
  #       sign_in (current_user)
  #
  #     post :create, params: { favorite: { user_id: current_user.id, apartment_id: 1, apartment: apartment1 } }
  #
  #     returned_json = JSON.parse(response.body)
  #     expect(response.status).to eq 200
  #     expect(response.content_type).to eq("application/json")
  #
  #     expect(returned_json["favorites"]["apartment"]["title"]).to eq "Amazing Apartment"
  #   end
  # end
  # end


    describe 'GET#index' do
    it 'should return a list of all the favorites' do

      current_user = FactoryBot.create(:user)
      # goal_2 = Goal.create(name: "work out", user_id: current_user.id)
      apartment1 = Apartment.create!(
        title: "Amazing Apartment",
        description: "Beautiful apartment!",
        price: "$1700",
        address: '13 4th St Boston, MA 02147',
        bedrooms: '3',
        bathrooms: '3',
        pets: 'Only cats. Meow!'
        )
      favorite = Favorite.create(apartment_id: apartment1.id, user_id: current_user.id)

      sign_in(current_user)
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')
      expect(returned_json.length).to eq 1
    end
  end
end
