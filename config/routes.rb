Rails.application.routes.draw do
  root 'static_files#index'

  namespace :api do
    namespace :v1 do
      resources :users
    end
  end 

   get 'auth/:provider/callback',  to: 'sessions#create'
   get 'logout',                   to: 'sessions#destroy'

   # get '*path', to: 'static_files#index'

end
