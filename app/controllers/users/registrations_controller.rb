class Users::RegistrationsController < Devise::RegistrationsController
  def new
    @registration = Registration.new
  end

  def create
    @omniauth = session["devise.omniauth"]

    registration = Registration.new(
      username: params[:registration][:username],
      omniauth: @omniauth,
    )

    if user = registration.save!
      sign_in_and_redirect user, event: :authentication
    else
      render :new
    end
  end
end
