class Api::V1::FavoritesController < ApplicationController

  def new
    @favorite = Favorite.new
  end
  def create

    if user_signed_in?
      @favorite=Favorite.new(favorite_params)
        @apartment=Apartment.find(params[:id])
      @favorite.apartment_id = @apartment.id
      @favorite.user_id = current_user.id
       @favorite.save



        flash[:notice] = 'Added Successfully To Favorites!'
    else
      flash[:notice] = 'You must be signed in to add a favorite.'
    end
  end

  def index
    render json: Favorite.where(user_id: current_user)
  end

  protected

  def favorite_params
    params.require(:favorite).permit(:apartment_id, :user_id, :apartment)
  end
end
