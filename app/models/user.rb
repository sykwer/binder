class User < ApplicationRecord
  devise :rememberable, :trackable, :timeoutable, :omniauthable, :omniauth_providers => [:facebook]

  has_many :posts

  # To know structure of auth, see https://github.com/mkdynamic/omniauth-facebook#auth-hash
  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.name = auth.info.name
      user.image_url = auth.info.image
    end
  end
end
