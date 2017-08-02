class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # We are not using :database_authenticatable, we have to define the helper method new_session_path(scope)
  # so it can correctly redirect in case of failure.
  def new_session_path(scope)
    new_user_session_path
  end
end
