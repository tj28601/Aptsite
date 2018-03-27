class UsersController < ApplicationController

  def index
    if current_user && current_user.admin?
      @apartments = Apartment.all
      @users = User.all
      @photos = Photo.all
    else
      redirect_to apartments_path
      flash[:notice] = "You must be signed in as an admin!"
    end
  end

  def destroy
    @user= User.find(params[:id])
    if current_user.admin?
      if @user.destroy
        redirect_to users_path
        flash[:notice] = "User deleted successfully"
      else
        flash[:notice] = 'User deletion failed'
        render :index
      end
    else
      flash[:notice] = "You must be signed in!"
      redirect_to new_user_session_path
    end
  end


end
