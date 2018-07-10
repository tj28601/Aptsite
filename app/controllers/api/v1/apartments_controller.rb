class Api::V1::ApartmentsController < ApplicationController
   protect_from_forgery unless: -> { request.format.json? }
   skip_before_action :verify_authenticity_token

  def index

    all_apartments = Apartment.all
    @apartments=Apartment.all
    @current_user = current_user

    render json: {apartments: all_apartments, current_user: current_user}
  end
  def show

    @apartment=Apartment.find(params[:id])
    @current_user = current_user

    render :json => @current_user, :json => @apartment
  end
end
