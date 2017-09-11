Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'pages#top'

  get 'profile', to: 'pages#profile'  # FIXME: Temporary routing. This should be users/:user_id
  get 'about', to: 'pages#about'

  devise_for :users, controllers: {
    omniauth_callbacks: "users/omniauth_callbacks",
    registrations: "users/registrations",
  }

  devise_scope :user do
    get 'login', to: 'sessions#new', as: :new_user_session
    delete 'sign_out', to: 'devise/sessions#destroy', as: :destroy_user_session
  end

  resources :posts, only: %i(create edit), param: :uuid do
    resource :content, controller: "posts/contents", only: %i(update)
  end

  namespace :api, { format: 'json' } do
    resources :posts, only: %i() do
      resource :content_draft, controller: 'posts/content_drafts', only: %i(update)
      resource :book_info, controller: 'posts/book_infos', only: %i(update)
    end
  end
end
