class Api::V1::FavoritesController < ApplicationController
# skip_before_action :verify_authenticity_token
  def show
  end

  def new
    @favorite = Favorite.new
  end
  def create
    # binding.pry
    # @favorite = Favorite.new(favorite_params)
    # @favorite.user_id = current_user.id
    # if @favorite.save
    #   render json: Favorite.all
    # else
    #   render json: { error: @favorite.errors.full_messages }, status: :unprocessable_entity
    # end
    @apartment=Apartment.find(params[:id])
    @favorite=Favorite.new(favorite_params)
    @favorite.apartment_id = @apartment.id
    @favorite.user_id = current_user.id
    if @favorite.save
      render json: Favorite.all
    else
      render json: { error: @favorite.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def index
    # render json: Favorite.where(user_id: current_user)
    render json: Favorite.all
  end

  def update
    @favorite = Favorite.find(params[:id])
    if @favorite.update_attributes(favorite_params)
    end
  end

  def destroy
    # binding.pry
    favorite = Favorite.find(params[:id])
    favorite.delete
  end

  protected

  def favorite_params
    params.require(:favorite).permit(:apartment_id, :user_id, :apartment)
  end
end
