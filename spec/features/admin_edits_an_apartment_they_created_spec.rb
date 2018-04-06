require 'rails_helper'

# FactoryBot.define do
#   factory :user do
#     sequence(:user_name) { |n| "user#{n}"}
#     sequence(:email) {|n| "user#{n}@example.com" }
#     password 'password'
#     password_confirmation 'password'
#     role 'member'
#   end
# end

describe 'Edit Apartment Form' do
  # let!(:user123) {FactoryBot.create(user_name: "bob", role: "admin", email: "clown@gmail.com", password: "password")}
    lion = FactoryBot.create(:user, role: "admin" )
    # let!(:apartment) {Apartment.create(title: "ApartmentTitle", description: "ApartmentDescription", price: "$500", bedrooms: "4", bathrooms: "5", address: "ApartmentAddress")}
    apartment_w = FactoryBot.create(:apartment)

  scenario 'signed in admin submits form to edit apartment' do
    visit '/'
    click_link 'Sign In'
    fill_in 'Email', with: lion.email
    fill_in 'Password', with: lion.password
    click_button 'Log in'
    visit "/apartments/#{apartment_w.id}/edit"
    fill_in 'Title', with: 'ApartmentTitle'
    fill_in 'Description', with: 'ApartmentDescription'
    fill_in 'Price', with: '$1900'
    fill_in 'Address', with: '32 4th St Boston, MA 02127'
    fill_in 'Bedrooms', with: '4'
    fill_in 'Bathrooms', with: '2'
    fill_in 'Bathrooms', with: '2'
    fill_in 'Sq ft', with: '24560'
    fill_in 'Pets', with: 'no pets allowed'
    click_button "Update Apartment"
    expect(page).to have_content 'Your apartment profile has been successfully updated!'
  end
  scenario 'admin submits invalid form' do
    visit '/'
    click_link 'Sign In'
    fill_in 'Email', with: lion.email
    fill_in 'Password', with: lion.password
    click_button 'Log in'
    visit edit_apartment_path(apartment_w.id)
    # expect(page).to have_content 'Title can\'t be blank'
    # expect(page).to have_content 'Description can\'t be blank'
    # expect(page).to have_content 'Price can\'t be blank'
    # expect(page).to have_content 'Address can\'t be blank'
    # expect(page).to have_content 'Bedrooms can\'t be blank'
    # expect(page).to have_content 'Bathrooms can\'t be blank'
    fill_in 'Description', with: ""
    click_button "Update Apartment"
    expect(page).to have_content 'Sorry :( Please try again.'
  end
  scenario 'guest attempts to access form' do
    visit "/apartments/#{apartment_w.id}/edit"
    expect(page).to have_content "You need to sign in or sign up before continuing."
    page.should have_xpath('/')
  end
end
