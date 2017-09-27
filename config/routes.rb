Rails.application.routes.draw do

  root to: 'pages#top'
  get 'about', to: 'pages#about'

  devise_for :users, controllers: {
    omniauth_callbacks: "users/omniauth_callbacks",
    registrations: "users/registrations",
  }

  devise_scope :user do
    get 'login', to: 'sessions#new', as: :new_user_session
    delete 'sign_out', to: 'devise/sessions#destroy', as: :destroy_user_session
  end

  get "/@:username", to: "users#show"
  get "/@:username/followers", to: "users#show"
  get "/@:username/followings", to: "users#show"
  get "/@:username/:menu", to: "users#show"

  resources :posts, only: %i(show create edit), param: :uuid do
    resource :content, controller: "posts/contents", only: %i(update)
  end

  namespace :api, { format: 'json' } do
    resources :posts, only: %i(show), param: :uuid do
      resource :content_draft, controller: 'posts/content_drafts', only: %i(update)
      resource :title_draft, controller: "posts/title_drafts", only: %i(update)
      resource :book_info, controller: 'posts/book_infos', only: %i(update)
      resources :bookmarks, controller: "posts/bookmarks", only: %i(create)
      delete "bookmarks", to: "posts/bookmarks#destroy"
    end

    resources :users, only: %i() do
      resource :profile, controller: "users/profiles", only: %i(update)
      resources :posts, controller: "users/posts", only: %i(index)
      resources :followers, controller: "users/followers", only: %i(index)
      resources :followings, controller: "users/followings", only: %i(index)
      get :timeline, to: "users/timelines#index"
    end

    resources :follows, only: %i(create)
    delete 'follows', to: "follows#destroy"
  end
end
