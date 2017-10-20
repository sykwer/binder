class Users::RegistrationsController < Devise::RegistrationsController
  def new
    @registration = Registration.new
  end

  def create
    registration = Registration.new(
      username: params[:registration][:username],
      fb_data: session["devise.facebook_data"],
      tw_data: session["devise.twitter_data"],
    )

    if user = registration.save
      sign_in_and_redirect user, event: :authentication
    else
      render :new
    end
  end
end
