require 'rails_helper'

RSpec.describe PhotosController, type: :controller do
  user = FactoryBot.create(:user, role: "admin")
  let!(:user1) {FactoryBot.create(:user, role: "member")}
  # let!(:apartment) {Apartment.new(:apartment)}
  apartment = Apartment.create!(
    title: "Amazing Apartment",
    description: "Beautiful apartment!",
    price: "$1700",
    address: '13 4th St Boston, MA 02147',
    bedrooms: '3',
    bathrooms: '3'
    )

    # photo = Photo.create!(apartment_id: apartment.id,
    #   photo_description: "this is a photo description",
    #   image: "photo.png")
    # photo.apartment = apartment
    # @apartment = Apartment.find(params[:apartment_id])
    # @photo = Photo.new(photo_params)
    # @photo.apartment = @apartment
    # @apartment=Apartment.find(params[:id])
    #   render json: @apartment.photos, each_serializer: PhotoSerializer

  # describe "POST#create" do
  #   it "admin is able to add a photo to an apartment profile" do
  #     sign_in (user)
  #           post :create, params: apartment.photos { apartment_id: apartment.id, image: "google.com" , photo_description: "Here is a photo description" } }
  #     # post :create, params: { photo: { apartment_id: apartment.id, photo_description: photo.photo_description, image: photo.image } }
  #     expect(Photo.find(photo.id).photo_description).to eq 'Here is a photo description'
  #   end
    # it 'should not add apartment to database if admin is not signed in' do
    #   post :create, params: { apartment: { title: apartment.title, description: apartment.description, price: apartment.price, address: apartment.address, bedrooms: apartment.bedrooms, bathrooms: apartment.bathrooms, sq_ft: apartment.sq_ft, pets: apartment.pets, date_available: apartment.date_available, thumbnail_photo: apartment.thumbnail_photo } }
    #   expect{Apartment.find_by(description: 'Beautiful apartment!').length}.to raise_error(NoMethodError)
    # end
  # end
end
