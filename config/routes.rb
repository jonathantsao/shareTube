Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:create, :index, :show, :destroy, :update]
  end

  get 'api/users', :to => 'api/users#find'

end
