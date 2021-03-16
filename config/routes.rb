Rails.application.routes.draw do
  get '/contacts', to: 'application#contacts'
  devise_for :users
  root "categories#index"
  resources :categories
  resources :products do
    resources :reviews, only: [:create, :destroy]
  end
  resources :orders, only: [:index, :show, :create, :new]
end
