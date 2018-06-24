Rails.application.routes.draw do
  root 'apartments#index'
# get '/', to: 'favorites#index'
  devise_for :users
  resources :contacts, only: [:new, :create]
  resources :about_details, only: [:index]
  # resources :apply, only: [:index]
  resources :favorites, only: [:index]
  resources :apartments do

  resources :photos

end

  namespace :api do
    namespace :v1 do
      resources :apartments
      resources :photos
      resources :users
      resources :favorites

    end
  end
end
