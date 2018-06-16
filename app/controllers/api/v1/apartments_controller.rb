class Api::V1::ApartmentsController < ApplicationController
   protect_from_forgery unless: -> { request.format.json? }
   skip_before_action :verify_authenticity_token
  def index

    # all_apartments = Apartment.all
    # render json: all_apartments, each_serializer: ApartmentSerializer

    all_apartments = Apartment.all
    # serializedapts = all_apartments, each_serializer: ApartmentSerializer

    @apartments=Apartment.all
    @current_user = current_user
     # render json: {apartments: @apartments, current_user: current_user}
     render json: {apartments: all_apartments, current_user: current_user}

     # render json: all_apartments, each_serializer: ApartmentSerializer, current_user: current_user


  end
  def show

    # @apartment=Apartment.find(params[:id])
    # render json: @apartment, serializer: ApartmentSerializer

    @apartment=Apartment.find(params[:id])
    # cow = @apartment, serializer: ApartmentSerializer
    @current_user = current_user

     # render json: {apartment: @apartment, current_user: current_user}
     # render :json => @current_user, :json => @apartment, :serializer => ApartmentSerializer
     render :json => @current_user, :json => @apartment
    # render json: @apartment, serializer: ApartmentSerializer
     # render json: current_user, @apartment, serializer: ApartmentSerializer
  end
end
