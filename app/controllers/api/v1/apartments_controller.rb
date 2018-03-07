class Api::V1::ApartmentsController < ApplicationController
  def index
    render json: Apartment.all
  end
  def show
  rendor json: { apt: Apartment.all }

  end
end
