class SocialProfile < ApplicationRecord
  belongs_to :user
  validates :uid, uniqueness: { scope: :provider }
  validates :provider, :uid, presence: true

  def set_values_and_save!(omniauth)
    if omniauth["provider"] != provider || omniauth["uid"] != uid
      raise "Invalid omniauth hash for social profile model"
    end

    self.access_token = omniauth["credentials"]["token"]
    self.name = omniauth["info"]["name"]
    self.image_url = omniauth["info"]["image"]

    case provider
    when "facebook"
      self.email = omniauth["info"]["email"]
      self.url = omniauth["extra"]["raw_info"]["link"]
    when "twitter"
      self.access_secret = omniauth["credentials"]["secret"]
      self.nickname = omniauth["info"]["nickname"]
      self.url = omniauth["info"]["urls"]["Twitter"]
    end

    save!
  end
end
