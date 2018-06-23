class PhotosController < ApplicationController
  before_action :authorize_user, except: [:index, :show]

  def create
    @apartment = Apartment.find(params[:apartment_id])
    @photo = Photo.new(photo_params)
    @photo.apartment = @apartment
    # @photo = Photo.new(:apartment=>@apartment)
    # @photo.apartment_id = @apartment.id
    if @photo.save
      flash[:notice] = "Your photo has been created successfully!"
    redirect_to apartment_path(@photo.apartment_id)
    end
  end

  def new
    @apartment = Apartment.find(params[:apartment_id])
    @photo = Photo.new
  end

  def edit
    @apartment= Apartment.find(params[:apartment_id])
    @photo = Photo.find(params[:id])
  end

  def update
    @apartment= Apartment.find(params[:apartment_id])
    @photo = Photo.find(params[:id])
    if @photo.update(photo_params)
          flash[:notice] = 'Photo updated successfully!'
      redirect_to @apartment
    else
      flash[:notice] = 'You are not able to edit this page.'
        redirect_to apartment_path(@photo.apartment_id)
    end
  end

  def destroy
    @apartment= Apartment.find(params[:apartment_id])
    @photo = Photo.find(params[:id])

     @photo.destroy
     flash[:notice] = 'Your photo has been deleted.'
      redirect_to apartment_url(@photo.apartment_id)
    # else
    #   flash[:notice] = 'Unable to delete :('
    #   render :edit
    # end
  end

  private

  def photo_params
    params.require(:photo).permit(:photo_description, :image, :apartment_id)
  end

  def authorize_user
    @apartment= Apartment.find(params[:apartment_id])
    # @photo = Photo.find(params[:id])
    if !user_signed_in? || !current_user.admin?
      flash[:notice] = "You do not have access to this page."
      redirect_to apartment_url(@apartment)
    end
  end
end
