class Post < ApplicationRecord
  belongs_to :user

  has_many :bookmarks, foreign_key: :post_uuid
  has_many :bookmarking_users, through: :bookmarks, source: :user

  has_many :claps, foreign_key: :post_uuid
  has_many :clapping_users, through: :claps, source: :user

  has_many :post_tags, foreign_key: :post_uuid
  has_many :tags, through: :post_tags, source: :tag

  before_create do
    self.uuid = SecureRandom.uuid
  end

  self.primary_key = "uuid"

  scope :published, lambda { where.not(first_published_at: nil) }
  scope :bookmarked_by, lambda { |user| joins(:bookmarks).where("bookmarks.user_id = ?", user.id) }
  scope :not_published, lambda { where(first_published_at: nil) }

  def self.created_posterior_to(post)
    Post.published
      .where(user_id: post.user_id)
      .where("created_at > ?", post.created_at)
      .order(created_at: :asc)
      .limit(1)
      .take
  end

  def self.created_prior_to(post)
    Post.published
      .where(user_id: post.user_id)
      .where("created_at < ?", post.created_at)
      .order(created_at: :desc)
      .limit(1)
      .take
  end

  def to_param
    uuid
  end

  def published?
    first_published_at.present?
  end

  def publish_or_update_content!
    update!(first_published_at: Time.zone.now) unless published?
    update!(content: content_draft)
    update!(title: title_draft)
  end

  def bookmarked_by?(user)
    bookmarks.where(user: user).exists?
  end

  def attatch_tags!(tags)
    tags.each do |tag|
      PostTag.find_or_create_by!(post_uuid: uuid, tag_id: tag.id)
    end
  end

  def detach_tags(tags)
    tags.each do |tag|
      PostTag.where(post_uuid: uuid, tag_id: tag.id).take.delete
    end
  end
end
