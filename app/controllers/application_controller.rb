class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  http_basic_authenticate_with name: ENV["BASIC_AUTH_USERNAME"], password: ENV["BASIC_AUTH_PASSWORD"] if Rails.env.production?

  # We are not using :database_authenticatable, we have to define the helper method new_session_path(scope)
  # so it can correctly redirect in case of failure.
  def new_session_path(scope)
    new_user_session_path
  end
end
