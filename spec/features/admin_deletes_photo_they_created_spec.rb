require 'rails_helper'

describe 'Delete Photo' do
  let!(:user4) {FactoryBot.create(:user, role: "admin")}
  let!(:user5) {FactoryBot.create(:user, role: "member")}
  let!(:apartment) {FactoryBot.create(:apartment)}
  let!(:photo) {Photo.create!(apartment_id: apartment.id, photo_description: "this is a photo description", image: "photo.png")}

  scenario 'signed in admin deletes photo' do
    visit '/'
    click_link 'Sign In'
    fill_in 'Email', with: user4.email
    fill_in 'Password', with: user4.password
    click_button 'Log in'
    visit "/apartments/#{photo.apartment_id}/photos/#{photo.id}/edit"
    click_link "Delete"
    expect(page).to have_content 'Your photo has been deleted.'
  end

scenario 'member (non-admin) attempts to delete photo' do
    visit '/'
    click_link 'Sign In'
    fill_in 'Email', with: user5.email
    fill_in 'Password', with: user5.password
    click_button 'Log in'
    visit "/apartments/#{photo.apartment_id}/photos/#{photo.id}/edit"
    expect(page).to have_content "You are not able to edit any photos."
  end
end
