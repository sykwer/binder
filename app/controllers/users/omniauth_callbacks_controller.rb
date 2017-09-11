class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    auth_param = request.env["omniauth.auth"]
    user = User.find_by(provider: auth_param.provider, uid: auth_param.uid)

    if user.present?
      sign_in_and_redirect user, event: :authentication
    else
      session["devise.facebook_data"] = auth_param
      redirect_to new_user_registration_url
    end
  end

  def failure
    redirect_to root_path
  end
end
