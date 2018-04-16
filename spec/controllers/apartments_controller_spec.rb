require 'rails_helper'

RSpec.describe ApartmentsController, type: :controller do

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

  describe "POST#create" do
    it "admin is able to add apartment to the database" do
      sign_in (user)
      post :create, params: { apartment: { title: apartment.title, description: apartment.description, price: apartment.price, address: apartment.address, bedrooms: apartment.bedrooms, bathrooms: apartment.bathrooms, sq_ft: apartment.sq_ft, pets: apartment.pets, date_available: apartment.date_available, thumbnail_photo: apartment.thumbnail_photo } }
      expect(Apartment.find(apartment.id).description).to eq 'Beautiful apartment!'
    end
    it 'should not add apartment to database if admin is not signed in' do
      post :create, params: { apartment: { title: apartment.title, description: apartment.description, price: apartment.price, address: apartment.address, bedrooms: apartment.bedrooms, bathrooms: apartment.bathrooms, sq_ft: apartment.sq_ft, pets: apartment.pets, date_available: apartment.date_available, thumbnail_photo: apartment.thumbnail_photo } }
      expect{Apartment.find_by(description: 'Beautiful apartment!').length}.to raise_error(NoMethodError)
    end
  end
  describe "PATCH#update" do
    it "should change the data in the db if creator is signed in" do
      sign_in (user)
      patch :update, params: { id: apartment.id, apartment: { title: 'new apartment title', description: apartment.description, price: apartment.price, address: apartment.address, bedrooms: apartment.bedrooms, bathrooms: apartment.bathrooms, sq_ft: apartment.sq_ft, pets: apartment.pets, date_available: apartment.date_available, thumbnail_photo: apartment.thumbnail_photo } }
      expect(Apartment.find(apartment.id).description).to eq 'Beautiful apartment!'
    end
    it "should not update db if form is incomplete" do
      sign_in (user)
      patch :update, params: { id: apartment.id, apartment: { title: 'new apartment title', description: apartment.description, price: apartment.price, address: apartment.address, bedrooms: apartment.bedrooms, bathrooms: apartment.bathrooms, sq_ft: apartment.sq_ft, pets: apartment.pets, date_available: apartment.date_available, thumbnail_photo: apartment.thumbnail_photo } }
      expect(Apartment.find(apartment.id).price).to eq '$1700'
    end
  it "should not update db if user is not logged in" do
    patch :update, params: { id: apartment.id, apartment: { title: 'new apartment title', description: "", price: apartment.price, address: apartment.address, bedrooms: apartment.bedrooms, bathrooms: apartment.bathrooms, sq_ft: apartment.sq_ft, pets: apartment.pets, date_available: apartment.date_available, thumbnail_photo: apartment.thumbnail_photo } }
    expect(Apartment.find(apartment.id).price).to eq '$1700'
    end
  end

  describe "#new" do
        it "apartment new" do
          admin = FactoryBot.create(:user, role: "admin")
          apartment = Apartment.create(  title: "Amazing Apartment",
            description: "This apt is in Beacon Hill. Come check it out before it's too late!",
            price: "$1800",
            address: '17 4th St Boston, MA 02147',
            bedrooms: '4',
            bathrooms: '2')

          sign_in(admin)

          get :new, params: { id: apartment.id }

      returned_json = response.body
      expect(response.status).to eq 200
    end
  end

  describe "DELETE#destroy" do
    it 'An admin deletes an apartment profile' do

      sign_in (user)
      delete :destroy, params: { id: apartment.id }
      expect{Apartment.find(params:[:id])}.to raise_error

    end
  end
end
