require 'rails_helper'

describe 'New Apartment Form' do
  let!(:user1) {FactoryBot.create(:user, role: "admin")}


  scenario 'signed in admin submits form for new apartment' do
    visit '/'
    click_link 'Sign In'
    fill_in 'Email', with: user1.email
    fill_in 'Password', with: user1.password
    click_button 'Log in'
    visit 'apartments/new'
    fill_in 'Title', with: 'ApartmentTitle'
    fill_in 'Description', with: 'ApartmentDescription'
    fill_in 'Price', with: '$1900'
    fill_in 'Address', with: '32 4th St Boston, MA 02127'
    fill_in 'Bedrooms', with: '4'
    fill_in 'Bathrooms', with: '2'
    fill_in 'Bathrooms', with: '2'
    fill_in 'Sq ft', with: '24560'
    fill_in 'Pets', with: 'no pets allowed'
    click_button "Create Apartment"
    expect(page).to have_content 'Your apartment profile has been created successfully!'
  end
  scenario 'admin submits invalid form' do
    visit '/'
    click_link 'Sign In'
    fill_in 'Email', with: user1.email
    fill_in 'Password', with: user1.password
    click_button 'Log in'
    visit 'apartments/new'
    click_button "Create Apartment"
    expect(page).to have_content 'Sorry :( Please try again.'
    expect(page).to have_content 'Title can\'t be blank'
    expect(page).to have_content 'Description can\'t be blank'
    expect(page).to have_content 'Price can\'t be blank'
    expect(page).to have_content 'Address can\'t be blank'
    expect(page).to have_content 'Bedrooms can\'t be blank'
    expect(page).to have_content 'Bathrooms can\'t be blank'
  end
  scenario 'guest attempts to access form' do
    visit '/apartments/new'
    expect(page).to have_content "You do not have access to this page."
    page.should have_xpath('/')
  end
end
