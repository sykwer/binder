class User < ApplicationRecord
  devise :rememberable, :trackable, :timeoutable, :registerable,
         :omniauthable, :omniauth_providers => [:facebook, :twitter]

  has_many :posts

  has_many :bookmarks
  has_many :bookmarked_posts, through: :bookmarks, source: :post

  has_many :claps
  has_many :clapped_posts, through: :claps, source: :post

  has_many :active_relationships, class_name: "Follow", foreign_key: "source_id", dependent: :destroy
  has_many :followings, through: :active_relationships, source: :destination

  has_many :passive_relationships, class_name: "Follow", foreign_key: "destination_id", dependent: :destroy
  has_many :followers, through: :passive_relationships, source: :source

  # To know structure of auth, see https://github.com/mkdynamic/omniauth-facebook#auth-hash
  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.name = auth.info.name
      user.image_url = auth.info.image
    end
  end

  def follows?(user)
    followings.where(id: user.id).exists?
  end

  def followed_by?(user)
    followers.where(id: user.id).exists?
  end

  def follower_ids
    Follow.where(destination_id: id).pluck(:source_id)
  end

  def clap_count_of(post)
    Clap.where(post: post, user: self).count
  end
end
