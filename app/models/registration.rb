class Registration
  include ActiveModel::Model
  attr_accessor :username, :omniauth
  validates :username, :omniauth, presence: true

  def save!
    raise "Invalid constructor params" if invalid?

    provider = omniauth["provider"]
    @user = User.new(username: username)

    @user.name = omniauth["info"]["name"]
    @user.image_url = omniauth["info"]["image"]
    @user.email = omniauth["info"]["email"] if provider.eql?("facebook")
    @user.save!

    @profile = SocialProfile.new(
      user: @user,
      provider: provider,
      uid: omniauth["uid"],
    )
    @profile.set_values_and_save!(omniauth)

    @user
  end
end
