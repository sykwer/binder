Rails.application.routes.draw do

  root to: 'pages#top'
  get 'about', to: 'pages#about'
  get 'terms', to: 'pages#terms'
  get 'terms/privacy', to: 'pages#privacy'

  devise_for :users, controllers: {
    omniauth_callbacks: "users/omniauth_callbacks",
    registrations: "users/registrations",
  }

  devise_scope :user do
    delete 'sign_out', to: 'devise/sessions#destroy', as: :destroy_user_session
  end

  get "/@:username", to: "users#show", as: :mypage
  get "/@:username/followers", to: "users#show"
  get "/@:username/followings", to: "users#show"
  get "/@:username/:menu", to: "users#show"

  get "streams/from_followings", to: "streams#from_followings"
  get "streams/timeline", to: "streams#world_timeline"

  resources :posts, only: %i(show create edit destroy), param: :uuid do
    resource :content, controller: "posts/contents", only: %i(update)
  end

  resources :contacts, only: %i(new create)
  resources :demands, only: %i(new create)

  namespace :api, { format: 'json' } do
    get "streams/from_followings", to: "streams#from_followings"
    get "streams/world_timeline", to: "streams#world_timeline"

    delete "multiple_posts", to: "multiple_posts#destroy"
    patch "multiple_posts/unpublish", to: "multiple_posts#unpublish"

    get "username_uniquenesses/:username", to: "username_uniquenesses#show"

    resources :posts, only: %i(show destroy), param: :uuid do
      resource :content_draft, controller: 'posts/content_drafts', only: %i(update)
      resource :title_draft, controller: "posts/title_drafts", only: %i(update)
      resource :content, controller: "posts/contents", only: %i(update)
      resource :book_info, controller: 'posts/book_infos', only: %i(update)
      resources :bookmarks, controller: "posts/bookmarks", only: %i(create)
      resources :claps, controller: "posts/claps", only: %i(create)
      delete "bookmarks", to: "posts/bookmarks#destroy"
    end

    resources :users, only: %i() do
      resource :profile, controller: "users/profiles", only: %i(update)
      resources :posts, controller: "users/posts", only: %i(index)
      resources :followers, controller: "users/followers", only: %i(index)
      resources :followings, controller: "users/followings", only: %i(index)
      resources :bookmarked_posts, controller: "users/bookmarked_posts", only: %i(index)
    end

    resources :follows, only: %i(create)
    delete 'follows', to: "follows#destroy"

    get "tags/search", to: "tags#search"
  end
end
