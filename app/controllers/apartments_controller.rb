class ApartmentsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def create
    @apartment = Apartment.new(new_apartment_params)
    if @apartment.save
      flash[:notice] = "Your apartment profile has been created successfully!"
      redirect_to @apartment
    else
      flash[:alert] = "Sorry :( Please try again."
      render :new
    end
  end

  def edit
    if (current_user.role == 'admin')
      @apartment = Apartment.find(params[:id])
  else
      flash[:notice] = 'You are not able to edit this page.'
      redirect_to apartment_path
    end
  end

  def destroy
  @apartment = Apartment.find(params[:id])
  @apartment.destroy
    flash[:notice] = 'Your profile has been deleted.'
  redirect_to root_path
  end

  def index;

  end

  def new
    if (current_user.role == 'admin')
      @apartment = Apartment.new
    else
        flash[:notice] = 'Sorry :( You do not have access to this page.'
        redirect_to apartments_path
  end

  end
  def show;
    render :index


  end

  def update
    @apartment = Apartment.find(params[:id])
     if @apartment.update_attributes(new_apartment_params)
      flash[:notice] = "Your apartment profile has been successfully updated!"
      redirect_to @apartment
   else
     flash[:alert] = "Sorry :( Please try again."
     render :edit
   end
 end

  private

  def new_apartment_params
    # params.require(:apartment).permit(:title, :description, :price, :address, :bedrooms, :bathrooms, :sq_ft, :pets, :date_available, params[:images] )
      params.require(:apartment).permit(:title, :description, :price, :address, :bedrooms, :bathrooms, :sq_ft, :pets, :date_available, :thumbnail_photo )
  end
  def authenticate_user
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end
end
