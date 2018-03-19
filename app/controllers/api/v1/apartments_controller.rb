class Api::V1::ApartmentsController < ApplicationController
  def index
    all_apartments = Apartment.all
    render json: all_apartments, each_serializer: ApartmentSerializer
    # work = all_apartments, each_serializer: ApartmentSerializer
    # all_photos = Photo.all
    # render json: all_photos, each_serializer: PhotoSerializer

    # all_apartments = Apartment.all
    # render json: {apartments: Apartment.all, photos: Photo.all}

    # render json: Photo.all
  end
  def show
    @apartment=Apartment.find(params[:id])
    render json: @apartment, serializer: ApartmentSerializer

  end
end
