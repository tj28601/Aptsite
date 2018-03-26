class ApartmentsController < ApplicationController
  def create

    # @apartment = Apartment.new(new_apartment_params)
    # if @apartment.save
    # redirect_to root_path
    # else
    #   render :new

    @apartment = Apartment.new(new_apartment_params)
    # authorize @apartment
    if @apartment.save
      # to handle multiple images upload on create
      if params[:images]
        params[:images].each { |image|
          @apartment.photos.create(image: image)
        }
      end
      flash[:notice] = "Your apartment has been created successfully!"
      redirect_to @apartment
    else
      flash[:alert] = "Something went wrong :("
      render :new
    end
  end



    # respond_to do |format|
    # if @apartment.save
    #   params[:photos]['photo'].each do |a|
    #      @photo = @apartment.photos.create!(:photo => a, :apartment_id => @apartment.id)
    #   end
    #   format.html { redirect_to @apartment, notice: 'Apartment Profile created successfully.' }
    # else
    #   format.html { render action: 'new' }
    # end
  # end

  # end
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
      if params[:images]
       params[:images].each { |image|
         @apartment.photos.create(image: image)
       }

       # if @apartment.photos

      end
      flash[:notice] = "Apartment has been successfully updated!"
      redirect_to @apartment
   else
     render :edit
   end
 end

  private

  def new_apartment_params
    params.require(:apartment).permit(:title, :description, :price, :address, :bedrooms, :bathrooms, :sq_ft, :pets, :date_available, params[:images] )
  end
end
