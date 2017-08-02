class User < ApplicationRecord
  devise :rememberable, :trackable, :omniauthable, :timeoutable
end
