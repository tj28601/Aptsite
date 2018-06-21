require 'rails_helper'

RSpec.describe FavoritesController, type: :controller do


    describe "GET#index" do
      it "displays a list of a user's favorites" do
        get :index
    # returned_json = response.body
    expect(response.status).to eq 200

      end
    end
    describe "DELETE#destroy" do
      it 'A user deletes a favorite from their list' do
        apartment = Apartment.create!(
          title: "Amazing Apartment",
          description: "Beautiful apartment!",
          price: "$1700",
          address: '13 4th St Boston, MA 02147',
          bedrooms: '3',
          bathrooms: '3',
          pets: 'Only fish.'
          )
            current_user = FactoryBot.create(:user)
            favorite = Favorite.create!(
              apartment_id: apartment.id,
              user_id: current_user.id,
              apartment: apartment,
              )
        sign_in (current_user)
        get :destroy, params: { id: favorite.id }

        expect{Favorite.find(params:[:id])}.to raise_error

      end
    end
end
