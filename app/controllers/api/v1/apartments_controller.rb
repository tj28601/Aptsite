class Api::V1::ApartmentsController < ApplicationController
  def index
    all_apartments = Apartment.all
    render json: all_apartments, each_serializer: ApartmentSerializer
  end
  def show
    @apartment=Apartment.find(params[:id])
    render json: @apartment, serializer: ApartmentSerializer

  end
end
