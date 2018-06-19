class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  # protect_from_forgery unless: -> { request.format.json? }
#what I had before^^

# protect_from_forgery with: :null_session


  # protect_from_forgery with: :exception
  # ^^What I had before
  # protect_from_forgery unless: -> { request.format.json? }


#VVbring back


#bring this back.......1234567
  # before_action :configure_permitted_parameters, if: :devise_controller?
#
# protected
#
  # def configure_permitted_parameters
  #   devise_parameter_sanitizer.permit(:sign_up, keys: [:profile_photo, :email])
  # end
  #this and above
  # protected
  # def configure_permitted_parameters
  #   whitelist = %i[email, password]
  #   devise_parameter_sanitizer.permit(:sign_up, keys: whitelist)
  #       devise_parameter_sanitizer.permit(:account_update, keys: whitelist)
  # end


#
end
