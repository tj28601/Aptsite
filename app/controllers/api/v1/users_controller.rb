# class Api::V1::UsersController < ApplicationController
#
#   def index
#     # if current_user.admin?
#       render json: {users: User.all, favorites: Favorite.all}
#     # else
#     #   render json: {error: "Sorry. You are not authorized to view this page"}, status: :unprocessable_entity
#     # end
#   end
#
#   protected
#
#   def user_params
#     params.require(:user).permit(:email, :user_name, :role)
#   end
# end
