class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :basic_auth! if Rails.env.production?

  # We are not using :database_authenticatable, we have to define the helper method new_session_path(scope)
  # so it can correctly redirect in case of failure.
  def new_session_path(scope)
    new_user_session_path
  end

  private

  def basic_auth!
    authenticate_or_request_with_http_basic do |username, password|
      Devise.secure_compare(username, ENV["BASIC_AUTH_USERNAME"]) &&
        Devise.secure_compare(password, ENV["BASIC_AUTH_PASSWORD"])
    end
  end
end
