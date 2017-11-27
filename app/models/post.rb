class Post < ApplicationRecord
  belongs_to :user

  has_many :bookmarks, foreign_key: :post_uuid
  has_many :bookmarking_users, through: :bookmarks, source: :user

  has_many :claps, foreign_key: :post_uuid
  has_many :clapping_users, through: :claps, source: :user

  has_many :post_tags, foreign_key: :post_uuid
  has_many :tags, through: :post_tags, source: :tag

  validate :published_post_must_have_book_image

  before_create do
    self.uuid = SecureRandom.uuid
  end

  self.primary_key = "uuid"

  scope :published, lambda { where.not(first_published_at: nil).where(is_published: true) }
  scope :bookmarked_by, lambda { |user| joins(:bookmarks).where("bookmarks.user_id = ?", user.id) }
  scope :not_published, lambda { where(is_published: false) }
  scope :not_deleted, lambda { where(is_deleted: false) }

  def self.created_posterior_to(post)
    Post.published
      .not_deleted
      .where(user_id: post.user_id)
      .where("created_at > ?", post.created_at)
      .order(created_at: :asc)
      .limit(1)
      .take
  end

  def self.created_prior_to(post)
    Post.published
      .not_deleted
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
    first_published_at.present? && is_published == true
  end

  def never_published?
    first_published_at.blank?
  end

  def publish_or_update_content!
    self.first_published_at = Time.zone.now if never_published?
    self.is_published = true
    self.content = content_draft
    self.title = title_draft
    save!
  end

  def unpublish!
    self.is_published = false
    save!
  end

  def delete_logically!
    self.is_deleted = true
    save!
  end

  def bookmarked_by?(user)
    bookmarks.where(user: user).exists?
  end

  def deleted?
    is_deleted
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

  private

  def published_post_must_have_book_image
    return unless published?
    return if book_image_url.present?
    errors.add(:post, "published must have book image")
  end
end
