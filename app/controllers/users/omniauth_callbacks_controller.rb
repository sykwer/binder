class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController

  def facebook; basic_action; end
  def twitter; basic_action; end

  private

  def basic_action
    @omniauth = request.env["omniauth.auth"]

    @profile = SocialProfile.find_by(
      provider: @omniauth["provider"],
      uid: @omniauth["uid"],
    )

    # connect
    if @profile.blank? && user_signed_in?
      @profile = SocialProfile.new(
        user: current_user,
        provider: @omniauth["provider"],
        uid: @omniauth["uid"],
      )

      @profile.set_values_and_save!(@omniauth)

      redirect_to mypage_url(current_user.username) and return
    end

    # signup
    if @profile.blank? && !user_signed_in?
      if @omniauth["provider"] == "twitter"
        # Too large data, need to except extra data from twitter auth hash.
        # Then we can avoid ActionDispatch::Cookies::CookieOverflow.
        session["devise.omniauth"] = @omniauth.except("extra")
      else
        session["devise.omniauth"] = @omniauth
      end
      redirect_to new_user_registration_url and return
    end

    # signin
    if @profile.present?
      @profile.set_values_and_save!(@omniauth)
      sign_in_and_redirect @profile.user, event: :authentication
    end
  end

  def failure
    redirect_to root_path
  end
end
