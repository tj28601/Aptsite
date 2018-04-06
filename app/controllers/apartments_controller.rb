class ApartmentsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def create

    # @apartment = Apartment.new(new_apartment_params)
    # if @apartment.save
    # redirect_to root_path
    # else
    #   render :new

    @apartment = Apartment.new(new_apartment_params)

    if @apartment.save


      # if params[:images]
      #   params[:images].each { |image|
      #     @apartment.photos.create(image: image)
      #   }
      # end
      # ^^what I had before

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
      flash[:notice] = 'You are not able to edit this page'
      redirect_to apartment_path
    end
  end
  def destroy
  @apartment = Apartment.find(params[:id])
  @apartment.destroy
  flash[:notice] = 'Your post has been deleted'
  redirect_to root_path
  end

  # if @apartment.destroy
  #   redirect_to apartments_path, flash: {notice: 'Your post has been deleted'}
  # else
  #   redirect_to :edit
  # end
  def index;
  end
  def new
    if (current_user.role == 'admin')
      @apartment = Apartment.new

    else
        flash[:notice] = 'Sorry. You do not have access to this page'
        redirect_to apartments_path
      end

    # @photos = @apartment.photos.build
  end
  def show;
    render :index



    # @photos = @apartment.photos.all
  end

  def update
    @apartment = Apartment.find(params[:id])
    # if @apartment.update(params[:apartment].permit(:title, :description, :price, :address, :bedrooms, :bathrooms, :sq_ft, :pets, :date_available, :photo ))
    #   redirect_to @apartment
    # else
    #   render :edit
    # end

    # authorize @apartment



     if @apartment.update_attributes(new_apartment_params)
    # if @apartment.update(params[:apartment].permit(:title, :description, :price, :address, :bedrooms, :bathrooms, :sq_ft, :pets, :date_available, :image ))


  #   render :new for @apartment.photos
  # end

     # to handle multiple images upload on update when user add more picture
      # if params[:images]
      #  params[:images].each { |image|
      #    @apartment.photos.create(image: image)
      #  }

       # if @apartment.photos

      # end
      flash[:notice] = "Your apartment profile has been successfully updated!"
      redirect_to @apartment
   else
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
