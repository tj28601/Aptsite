require 'rails_helper'

RSpec.describe ContactsController, type: :controller do
  # let!(:contact) {FactoryBot.create(:contact)}
let!(:user) {FactoryBot.create(:user)}
    describe "POST#create" do
      it "sends an email to admin via Sendgrid" do

    # returned_json = response.body
    post :create, params: { contact: { name: 'John Smith', email: user.email, message: 'Hello. Do you have any other properties available?' } }
    # expect(Contact.find(contact.id).name).to eq 'John Smith'
      expect(response.status).to eq 302
      end
    end
end
