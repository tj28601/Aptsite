class PhotosController < ApplicationController
  # before_action :authenticate_user!, except: [:index, :show]

def create

  @apartment = Apartment.find(params[:apartment_id])
  @photo = Photo.new(photo_params)
  @photo.apartment = @apartment
  # @photo = Photo.new(:apartment=>@apartment)
  # @photo.apartment_id = @apartment.id
  if @photo.save
  redirect_to apartment_path(@photo.apartment_id)
end
end



  def new
    # if (current_user.role == 'admin')
      @apartment = Apartment.find(params[:apartment_id])
      @photo = Photo.new
      # (:apartment=>@apartment)
    else
        flash[:notice] = 'Sorry. You do not have access to this page'

      # end

    # @photos = @apartment.photos.build
  end

  def edit
    if (current_user.role == 'admin')
    @apartment= Apartment.find(params[:apartment_id])
    @photo = Photo.find(params[:id])
  else
      flash[:notice] = 'You are not able to edit this page'
        redirect_to apartment_path(@photo.apartment_id)
    end
  end

  def update

    @apartment= Apartment.find(params[:apartment_id])
    @photo = Photo.find(params[:id])
    if @photo.update(photo_params)
          flash[:notice] = 'Photo updated successfully!'
      redirect_to @apartment
  else
      flash[:notice] = 'You are not able to edit this page'
        redirect_to apartment_path(@photo.apartment_id)
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:photo_description, :image, :apartment_id)
  end
  # def authenticate_user
  #   if !user_signed_in? || !current_user.admin?
  #     raise ActionController::RoutingError.new("Not Found")
  #   end
  # end
end
