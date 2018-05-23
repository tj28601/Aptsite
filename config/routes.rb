Rails.application.routes.draw do
  root 'apartments#index'

  devise_for :users
  resources :contacts, only: [:new, :create]
  resources :aboutdetails, only: [:index]
  resources :apply, only: [:index]
  resources :favorites 
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
