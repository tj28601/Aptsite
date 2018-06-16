class Api::V1::FavoritesController < ApplicationController
# before_action :authenticate_user!, except: [:index, :show]
  def show
  end

  def new
    @favorite = Favorite.new
  end
  def create
    # if user_signed_in?
    # @favorite = Favorite.new(favorite_params)
    # @favorite.user_id = current_user.id
    # if @favorite.save
    #   render json: Favorite.all
    # else
    #   render json: { error: @favorite.errors.full_messages }, status: :unprocessable_entity
    # end
if user_signed_in?
    @apartment=Apartment.find(params[:id])
    @favorite=Favorite.new(favorite_params)
    @favorite.apartment_id = @apartment.id
    @favorite.user_id = current_user.id
     @favorite.save
      # redirect_to favorites_path
      flash[:notice] = 'Favorite added successfully!'
# rendirect_to favorites_path
# render template: 'aboutdetails/index'

 else
    flash[:notice] = 'You must be signed in to add a favorite.'
     # render 'aboutdetails/index'
end
end
#       flash[:notice] = 'Favorite added successfully!'

    # role = current_user.role
# if current_user.id = undefined
#     flash[:notice] = 'You must be signed in to add a favorite.'
#   redirect_to root_path
# binding.pry
    # if @favorite.save

        # binding.pry
              # flash[:notice] = 'Favorite added successfully!'
      #   # binding.pry
      # # console.log("hello")
      #   # render json: Favorite.all
    #     redirect_to new_user_session_path
    #   #   # render json: { error: @favorite.errors.full_messages }, status: :unprocessable_entity
    #   end
    # end




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
