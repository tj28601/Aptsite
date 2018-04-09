class Api::V1::PhotosController < ApplicationController
   protect_from_forgery unless: -> { request.format.json? }
     # before_action :authenticate_user!, except: [:index, :show]
     skip_before_action :verify_authenticity_token
  def index
    all_photos = Photo.all
    # all_photos = Photo.where(apartment_id: 4)
    render json: all_photos, each_serializer: PhotoSerializer
  end
  def show

  @apartment=Apartment.find(params[:id])
  render json: @apartment.photos, each_serializer: PhotoSerializer
  # render json: @apartment, serializer: ApartmentSerializer
  end
  def create
    # binding.pry
    # if (current_user.role == 'admin')
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
#   def create
#   newImage = Photo.new
#   newImage.file = params["file"]
#   # newImage.user = current_user
#   if newImage.save
#     render json: Photo.all
#   end
# end
  def update
      @photo = Photo.find(params[:id])
      if @photo.update_attributes(photo_params)
    #   book = Book.find(book_params[:id])
      end
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
    end


  protected

  # def photo_params
  #   params.require(:photo).permit(:apartment_id, :photo_description, :image)
  # end
  # ^^^What I had before
  def photo_params
    params.require(:photo).permit(:photo_description, :image, :apartment_id)
        # params.require(:photo).permit(:photo_description, :image).merge(apartment: Apartment.find(params[:apartment_id]))
  end
  # def authenticate_user
  #   if !user_signed_in? || !current_user.admin?
  #     raise ActionController::RoutingError.new("Not Found")
  #   end
  # end
end
