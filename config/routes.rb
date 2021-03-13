Rails.application.routes.draw do
  devise_for :users
  root "categories#index"
  resources :categories
  resources :products do
    resources :reviews, only: [:create, :destroy]
  end
end
