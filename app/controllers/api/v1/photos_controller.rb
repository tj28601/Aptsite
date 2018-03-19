class Api::V1::PhotosController < ApplicationController
  def index
    all_photos = Photo.all
    # all_photos = Photo.where(apartment_id: 4)
    render json: all_photos, each_serializer: PhotoSerializer
  end
  def show
    # all_photos = Photo.all
    # @photo = Photo.find(params[:id])
    # @photo = Photo.all.find_by apartment_id:

    # all_photos = ApartmentPhotoUploader.all
    # all_photos = Photo.where(apartment_id: 4)
    # all_photos = Photo.where(apartment_id: 5)
    # all_photos = Photo.where(apartment_id: 6)
    # all_photos = Photo.where(apartment_id: params[:apartment_id])



  # photos =  Photo.where(apartment_id: '6')
  #
  #
  #   render json: photos, serializer: PhotoSerializer



  # all_photos = Photo.where(apartment_id: params[:apartment_id] )
  # render json: @photo, each_serializer: PhotoSerializer

  @apartment=Apartment.find(params[:id])
  render json: @apartment.photos, each_serializer: PhotoSerializer
  # render json: @apartment, serializer: ApartmentSerializer
  end
  def create
    apartment = Apartment.find(photo_params[:apartment_id])
    photo = params[:photo][:photo_id]

    # if user_signed_in?
    #   update_photo = Photo.where(user_id: current_user.id, id: photo, wizard_id: wizard)
      # if !update_photo.empty?
      #   Photo.destroy(photo)
        new_photo = Photo.new(photo_params)
        # new_photo.user = current_user
        if new_photo.save
          render json: { photo: new_photo }
        else
          render json: { photo: new_photo, errors: new_photo.errors.full_messages }, status: :unprocessable_entity
        end
      else
        new_photo = Photo.new(photo_params)
        # new_photo.user = current_user
        if new_photo.save
          render json: { photo: new_photo }
        else
          render json: { photo: new_photo, errors: new_photo.errors.full_messages }, status: :unprocessable_entity
        end
      end
    # else
    #   render json: { errors: "Access Denied" }, status: 401
    # end
  end



  def destroy
    destroyed_photo = Photo.find(params[:photo][:photo_id])
    # if user_signed_in? && (current_user.id == destroyed_review.user_id || current_user.role == 'admin')
      if destroyed_photo.destroy
        render json: {message:"Photo Deleted"}
      else
        render json: { errors: destroyed_photo.errors.full_messages }, status: :unprocessable_entity
      end
    # else
    #   render json: { errors: "Access Denied!"}, status: 401
    # end


  protected

  def photo_params
    params.require(:photo).permit(:apartment_id, :photo_description, :image)
  end
end
