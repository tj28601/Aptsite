class FavoritesController < ApplicationController
  def index
    # @apartments = Apartment.all.where(user_id: current_user)
    @favorites=Favorite.all.where(user_id: current_user)

    gon.user = current_user
    # gon.cray = []
    gon.lat = []
    gon.long = []
    gon.coords = []
    # gon.lat = ''
    # gon.long = ''
    # gon.latlong = ''
    @favorites.each do |favorite|
    gon.lat << favorite.lat
    gon.long << favorite.long
    # gon.long +=   favorite.apartment.longitude.to_s
end

    gon.coords << gon.lat.zip(gon.long)


# gon.apt = cows
# @favorites.each do |favorite|
# gon.hello = favorite.apartment_id
# gon.hello = @favorites
#     gon.lat=@cow.apartment.latitude
#     gon.long=@cow.apartment.longitude

# gon.latt = 42.366073, 42.3602556, 42.3432499
# gon.longg = -71.07863, -71.0670363, -71.0892186
# gon.longg =
# gon.latit =''

# gon.array = @favorites

# gon.longit = ''
#      @favorites.each do |favorite|
#        gon.marker += favorite.id.to_s.split(' ')
# end
  # addMarker({lat:gon.latt,lng:gon.longg});
    # gon.latit += favorite.apartment.latitude.to_s
    # gon.longit += favorite.apartment.longitude.to_s
# puts gon.latit = favorite.apartment.latitude
#     end
  end
  def destroy
# binding.pry
  @favorite = Favorite.find(params[:id])
  @favorite.destroy
    flash[:notice] = 'Your favorite has been deleted.'
  redirect_to apartments_path
  end
end
