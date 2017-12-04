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

  has_many :social_profiles

  has_many :notifications, foreign_key: "destination_user_id"

  validates :name, length: { in: 1..50 }
  validates :bio, length: { maximum: 160 }
  validates :username, length: { in: 1..15 }, format: { with: /\A[A-Za-z0-9_]+\z/ }

  def social_profile(provider)
    social_profiles.select { |sp| sp.provider == provider.to_s }.first
  end

  def follows?(user)
    followings.where(id: user.id).exists?
  end

  def followed_by?(user)
    followers.where(id: user.id).exists?
  end

  def twitter_connected?
    social_profile(:twitter).present?
  end

  def facebook_connected?
    social_profile(:facebook).present?
  end

  def has_bookmarked_post?
    Post.bookmarked_by(self).last.present?
  end

  def has_published_post?
    Post.published.where(user_id: id).last.present?
  end

  def follower_ids
    Follow.where(destination_id: id).pluck(:source_id)
  end

  def clap_count_of(post)
    claps = Clap.where(post: post, user: self).take
    claps.present? ? claps.count : 0
  end
end
