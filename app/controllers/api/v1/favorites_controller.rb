class Api::V1::FavoritesController < ApplicationController
# skip_before_action :verify_authenticity_token
def index
  # binding.pry
  render json: Favorite.all
end
def show
end

def new
  @favorite = Favorite.new
end
  def create
    # binding.pry
    @favorite = Favorite.new(favorite_params)
    if @favorite.save
      render json: Favorite.all
    else
      render json: { error: @favorite.errors.full_messages }, status: :unprocessable_entity
    end
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
#
  def favorite_params
    params.require(:favorite).permit(:title, :description, :price, :address, :bedrooms, :bathrooms, :sq_ft, :pets, :date_available, :thumbnail_photo, :latitude, :longitude)
  end
end
