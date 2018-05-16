class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  # protect_from_forgery unless: -> { request.format.json? }
#what I had before^^
protect_from_forgery with: :null_session


  # protect_from_forgery with: :exception
  # ^^What I had before
  # protect_from_forgery unless: -> { request.format.json? }


#VVbring back
  before_action :configure_permitted_parameters, if: :devise_controller?

protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:profile_photo])
  end
#
end
