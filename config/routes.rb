Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:create, :index, :show, :destroy, :update]
    resources :videos do
      resources :comments, only: [:create, :index, :show]
    end
    resources :comments, only: [:destroy, :update]
    resources :likes, only: [:create, :destroy]
  end

  get 'api/users', :to => 'api/users#find'
  get 'api/videos/search', :to => 'api/videos#search'
  post 'api/users/:id/subscribe', :to => 'api/users#subscribe'
  delete 'api/users/:id/unsubscribe', :to => 'api/users#unsubscribe'

end
