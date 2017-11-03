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

  def follows?(user)
    followings.where(id: user.id).exists?
  end

  def followed_by?(user)
    followers.where(id: user.id).exists?
  end

  def twitter_connected?
    twitter_uid.present?
  end

  def follower_ids
    Follow.where(destination_id: id).pluck(:source_id)
  end

  def clap_count_of(post)
    Clap.where(post: post, user: self).take.count
  end

  def link_to_sns_of!(auth_param)
    case auth_param["provider"]
    when "facebook"
      self.facebook_uid = auth_param["uid"]
      self.facebook_link = auth_param["extra"]["raw_info"]["link"]
      self.facebook_access_token = auth_param["credentials"]["token"]
      self.email = auth_param["info"]["email"]
    when "twitter"
      self.twitter_uid = auth_param["uid"]
      self.twitter_link = auth_param["info"]["urls"]["Twitter"]
      self.twitter_access_token = auth_param["credentials"]["token"]
      self.twitter_access_token_secret = auth_param["credentials"]["secret"]
    end

    save!
  end

  def update_twitter_access_token!(auth_param)
    self.twitter_access_token = auth_param["credentials"]["token"]
    self.twitter_access_token_secret = auth_param["credentials"]["secret"]
    save!
  end

  def update_facebook_access_token!(auth_param)
    self.facebook_access_token = auth_param["credentials"]["token"]
    save!
  end
end
