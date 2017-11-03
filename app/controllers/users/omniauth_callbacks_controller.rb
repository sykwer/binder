class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    auth_param = request.env["omniauth.auth"]
    user = User.find_by(facebook_uid: auth_param.uid)

    if user.blank? && user_signed_in?
      current_user.link_to_sns_of!(auth_param)
      redirect_to mypage_url(current_user.username) and return
    end

    if user.present?
      sign_in_and_redirect user, event: :authentication
    else
      session["devise.facebook_data"] = auth_param
      redirect_to new_user_registration_url
    end
  end

  def twitter
    auth_param = request.env["omniauth.auth"]
    user = User.find_by(twitter_uid: auth_param.uid)

    if user.blank? && user_signed_in?
      current_user.link_to_sns_of!(auth_param)
      redirect_to mypage_url(current_user.username) and return
    end

    if user.present?
      user.update_twitter_access_token!(auth_param)
      sign_in_and_redirect user, event: :authentication
    else
      # Too large data, need to except extra data from twitter auth hash.
      # Then we can avoid ActionDispatch::Cookies::CookieOverflow.
      session["devise.twitter_data"] = auth_param.except("extra")
      redirect_to new_user_registration_url
    end
  end

  def failure
    redirect_to root_path
  end
end
