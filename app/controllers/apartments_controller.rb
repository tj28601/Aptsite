class ApartmentsController < ApplicationController
  def create
    
    @apartment = Apartment.new(new_apartment_params)
    if @apartment.save
    redirect_to root_path
    else
      render :new
    end
  end
  # def destroy
  #   @apartment = Apartment.find(params[:id])
  #   @apartment.destroy
  #
  #
  #   redirect_to root_path
  # end
  def index
    @apartments = Apartment.all
  end
  def new
    @apartment = Apartment.new
  end
  def show
    @apartment = Apartment.find(params[:id])
  end
  private

  def new_apartment_params
    params.require(:apartment).permit(:title, :description, :price, :address, :bedrooms, :bathrooms )
  end
end
