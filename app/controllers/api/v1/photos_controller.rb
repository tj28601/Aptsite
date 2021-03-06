class Api::V1::PhotosController < ApplicationController
   protect_from_forgery unless: -> { request.format.json? }
   skip_before_action :verify_authenticity_token

  def index
    all_photos = Photo.all
    render json: all_photos, each_serializer: PhotoSerializer
  end

  def show
    @apartment=Apartment.find(params[:id])
    render json: @apartment.photos, each_serializer: PhotoSerializer
  end
  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render json: Photo.all
      flash[:notice] = "Photo added successfully"

    elsif !@photo.save
              render json: { error: @photo.errors.full_messages }, status: :unprocessable_entity
    else
      flash[:notice] = 'Sorry. You do not have access to this page'
      redirect_to apartment_path(@photo.apartment_id)
    end
  end

  def update
    @photo = Photo.find(params[:id])
      if @photo.update_attributes(photo_params)
    end
  end

  def destroy
    destroyed_photo = Photo.find(params[:photo][:photo_id])
    if destroyed_photo.destroy
      render json: {message:"Photo Deleted"}
    else
      render json: { errors: destroyed_photo.errors.full_messages }, status: :unprocessable_entity
    end
  end

  protected

  def photo_params
    params.require(:photo).permit(:photo_description, :image, :apartment_id)
  end
end
