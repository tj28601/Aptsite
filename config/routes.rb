Rails.application.routes.draw do
  root 'apartments#index'
  devise_for :users
  resources :apartments, only: [:create, :destroy, :edit, :index, :new, :show, :update]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :apartments
    end
  end
end
