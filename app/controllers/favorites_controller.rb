class FavoritesController < ApplicationController

  def index
    @favorites=Favorite.all.where(user_id: current_user)

    gon.address = []
    gon.lat = []
    gon.long = []
    gon.coords = []
    gon.markerArray=[]

    @favorites.each do |favorite|
      gon.lat << favorite.lat
      gon.long << favorite.long
      gon.address << favorite.address.to_s

    end

    gon.lat.zip(gon.long).each do |lat, long|
      gon.coords <<  [lat, long]
    end

    gon.coords.zip(gon.address).each do|coords, address|
      gon.markerArray <<  [coords, address]

    end
  end
  
  def destroy
    @favorite = Favorite.find(params[:id])
    @favorite.destroy
      flash[:notice] = 'Your favorite has been deleted.'
    redirect_to favorites_path
  end
end
