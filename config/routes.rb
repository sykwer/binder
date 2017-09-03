Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'pages#top'
  get 'profile', to: 'pages#profile'  # FIXME: Temporary routing. This should be users/:user_id
  get 'editor', to: 'pages#editor' # FIXME: Temporary routing.
  get 'about', to: 'pages#about'

  resources :posts, only: %i(create edit), param: :uuid

  devise_for :users, :controllers => { omniauth_callbacks: "users/omniauth_callbacks" }

  devise_scope :user do
    get 'login', to: 'sessions#new', as: :new_user_session
    delete 'sign_out', to: 'devise/sessions#destroy', as: :destroy_user_session
  end

  namespace :api, { format: 'json' } do
    resources :posts, only: %i() do
      resource :content_draft, controller: 'posts/content_drafts', only: %i(update)
    end
  end
end
