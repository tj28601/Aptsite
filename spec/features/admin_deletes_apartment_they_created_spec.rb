require 'rails_helper'

describe 'Apartment delete functionality' do
  let!(:user) {FactoryBot.create(:user, role: "admin")}
  let!(:apartment) {FactoryBot.create(:apartment)}

  scenario 'signed in admin deletes an apartment they created' do
    visit '/'
    click_link 'Sign In'
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Log in'
    visit "/apartments/#{apartment.id}/edit"
    expect(page).to have_content 'Edit Apartment Details'
    expect(page).to have_content 'Delete'
    click_link 'Delete'
    expect(page).to have_content 'Your profile has been deleted.'
  end

end
