require 'rails_helper'

describe 'New Apartment Form' do
  let!(:user2) {FactoryBot.create(:user, role: "admin")}
  let!(:user3) {FactoryBot.create(:user, role: "member")}
  let!(:apartment) {FactoryBot.create(:apartment)}

  scenario 'signed in admin submits photo for new apartment' do
    visit '/'
    click_link 'Sign In'
    fill_in 'Email', with: user2.email
    fill_in 'Password', with: user2.password
    click_button 'Log in'
    visit "/apartments/#{apartment.id}/photos/new"
    fill_in 'Image Description', with: 'Amazing Apartment Photo'
    attach_file 'image', "#{Rails.root}/spec/support/images/photo.png"
    click_button "Create Photo"
    expect(page).to have_content 'Your photo has been created successfully!'
  end

  scenario 'member (non-admin) attempts to submit new photo to apartment profile' do
    visit '/'
    click_link 'Sign In'
    fill_in 'Email', with: user3.email
    fill_in 'Password', with: user3.password
    click_button 'Log in'
    visit "/apartments/#{apartment.id}/photos/new"
    expect(page).to have_content "Sorry. You do not have access to this page"

  end
end
