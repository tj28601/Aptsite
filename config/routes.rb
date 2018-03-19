Rails.application.routes.draw do
  root 'apartments#index'
  devise_for :users
  resources :apartments, only: [:create, :destroy, :edit, :index, :new, :show, :update]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :photos, only: [:create, :destroy, :edit, :index, :new, :show, :update]
    # resources :photos, only: [:create, :destroy, :edit, :index, :new, :show, :update]




  namespace :api do
    namespace :v1 do
      resources :apartments

      resources :photos do
     # get 'photos/apartment_id', :to => "photos#show", :as => "apartment_id"
     end
    end
  end
end
