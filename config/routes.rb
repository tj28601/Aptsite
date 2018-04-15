Rails.application.routes.draw do
  root 'apartments#index'


  devise_for :users

  resources :aboutdetails, only: [:index]
  resources :apply, only: [:index]
  resources :apartments do

    # , only: [:create, :destroy, :edit, :index, :new, :show, :update]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :photos

    # resources :photos, only: [:create, :destroy, :edit, :index, :new, :show, :update]
# get 'pages/about'
end
# resources :about
# resources :contact

  namespace :api do
    namespace :v1 do
      resources :apartments
      resources :photos
      resources :users

      # resources :photos do
      #   ^was working earlier



     # get 'photos/apartment_id', :to => "photos#show", :as => "apartment_id"


     # end
     # ^^was working working earlier

    end
  end
end
