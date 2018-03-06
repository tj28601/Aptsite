class Api::V1::ApartmentsController < ApplicationController
  def index
    render json: Apartment.all
  end
end
