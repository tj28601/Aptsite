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

#     it 'should return a json object with errors and a 422 response if a field is empty' do
#       sign_in :user, user2
#       post :create, params: { favorite: { user_id: user2.id, apartment_id: user2.id } }
#
#       returned_json = JSON.parse(response.body)
#       expect(response.status).to eq 422
#       expect(response.content_type).to eq("application/json")
#
#       expect(returned_json["errors"][0]).to eq "Body can't be blank"
#       expect(returned_json["errors"][1]).to eq "Rating can't be blank"
#     end
#
#     it 'should return a json object with errors and a 401 response if user is not logged in' do
#       post :create, params: { favorite: { user_id: user2.id, apartment_id: clippy.id, body: "Clippy is not ideal.", rating: 20 } }
#
#       returned_json = JSON.parse(response.body)
#       expect(response.status).to eq 401
#       expect(response.content_type).to eq("application/json")
#       expect(returned_json["errors"]).to eq "Access Denied"
#
#     end
#
#   end
#
#   describe "DELETE#destroy" do
#     it 'removes a favorite from the database if the creator deletes it' do
#       sign_in :user, user2
#       review1 = Review.create!(user_id: user2.id, apartment_id: clippy.id, body: "asdfjkl;", rating: 40 )
#
#       delete :destroy, params: { id: review1.id, favorite: {review_id:review1.id ,user_id: user2.id, apartment_id: clippy.id, body: "asdfjkl;", rating: 40} }
#
#       expect{Review.find(review1.id)}.to raise_error
#     end
#
#     it 'removes a favorite from the database if an admin deletes it' do
#       sign_in :user, user1
#       review1 = Review.create!(user_id: user2.id, apartment_id: clippy.id, body: "asdfjkl;", rating: 40 )
#
#       delete :destroy, params: { id: review1.id, favorite: { review_id: review1.id, user_id: user2.id, apartment_id: clippy.id, body: "cow", rating: 20 } }
#
#       expect{Review.find(review1.id)}.to raise_error
#     end
#
#     it 'does not remove a favorite if another user deletes it' do
#       sign_in :user, user3
#       review1 = Review.create!(user_id: user2.id, apartment_id: clippy.id, body: "asdfjkl;", rating: 40 )
#
#       delete :destroy, params: { id: review1.id, favorite: { review_id: review1.id, user_id: user2.id, apartment_id: clippy.id, body: "cow", rating: 20 } }
#
#       expect{Review.find(review1.id)}.to_not raise_error
#
#     end
#   end
# end
