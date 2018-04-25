Rails.application.routes.draw do
  root 'apartments#index'

  devise_for :users

  resources :aboutdetails, only: [:index]
  resources :apply, only: [:index]
  resources :apartments do
  
  resources :photos

end

  namespace :api do
    namespace :v1 do
      resources :apartments
      resources :photos
      resources :users

    end
  end
end
