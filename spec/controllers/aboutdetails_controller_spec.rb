require 'rails_helper'

RSpec.describe AboutdetailsController, type: :controller do


  describe "GET#index" do
    it "displays a description of Connaughton & Associates" do
get :index
  # returned_json = response.body
  expect(response.status).to eq 200
    end
  end
end
