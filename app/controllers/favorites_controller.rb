class FavoritesController < ApplicationController
  def index
    @favorites=Favorite.all.where(user_id: current_user)
  end
  def destroy
# binding.pry
  @favorite = Favorite.find(params[:id])
  @favorite.destroy
    flash[:notice] = 'Your favorite has been deleted.'
  redirect_to apartments_path
  end
end
