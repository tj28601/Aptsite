class ApartmentsController < ApplicationController
  def create

    @apartment = Apartment.new(new_apartment_params)
    if @apartment.save
    redirect_to root_path
    else
      render :new
    end
  end
  def edit
    @apartment = Apartment.find(params[:id])
  end
  def destroy
  @apartment = Apartment.find(params[:id])
  @apartment.destroy

  redirect_to root_path
  end
  def index;
  end
  def new
    @apartment = Apartment.new
  end
  def show;
    render :index
  end

  def update
    @apartment = Apartment.find(params[:id])
    if @apartment.update(params[:apartment].permit(:title, :description, :price, :address, :bedrooms, :bathrooms, :sq_ft, :pets, :date_available ))
      redirect_to @apartment
    else
      render :edit
    end
  end
  private

  def new_apartment_params
    params.require(:apartment).permit(:title, :description, :price, :address, :bedrooms, :bathrooms, :sq_ft, :pets, :date_available )
  end
end
