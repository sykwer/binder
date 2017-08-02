class User < ApplicationRecord
  devise :rememberable, :trackable, :timeoutable, :omniauthable, :omniauth_providers => [:facebook]
end
