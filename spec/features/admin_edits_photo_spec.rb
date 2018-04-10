require 'rails_helper'

describe 'Edit Photo Form' do
  let!(:user2) {FactoryBot.create(:user, role: "admin")}
  let!(:user3) {FactoryBot.create(:user, role: "member")}
  let!(:apartment) {FactoryBot.create(:apartment)}
  let!(:photo) {Photo.create!(apartment_id: apartment.id, photo_description: "this is a photo description", image: "photo.png")}

  scenario 'signed in admin submits form to edit photo' do
    visit '/'
    click_link 'Sign In'
    fill_in 'Email', with: user2.email
    fill_in 'Password', with: user2.password
    click_button 'Log in'
    visit "/apartments/#{photo.apartment_id}/photos/#{photo.id}/edit"
    fill_in 'Image Description', with: 'Look at this new description'
    click_button "Update Photo"
    expect(page).to have_content 'Photo updated successfully!'
  end

scenario 'member (non-admin) attempts to edit photo' do
    visit '/'
    click_link 'Sign In'
    fill_in 'Email', with: user3.email
    fill_in 'Password', with: user3.password
    click_button 'Log in'
    visit "/apartments/#{photo.apartment_id}/photos/#{photo.id}/edit"
    expect(page).to have_content "You are not able to edit any photos."
  end
end
