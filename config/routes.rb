Rails.application.routes.draw do
  get 'orders/index'
  get 'orders/show'
  get 'orders/create'
  get 'orders/new'
  devise_for :users
  root "categories#index"
  resources :categories
  resources :products do
    resources :reviews, only: [:create, :destroy]
  end
  resources :orders, only: [:index, :show, :create, :new]
end
