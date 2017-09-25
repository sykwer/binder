class Post < ApplicationRecord
  belongs_to :user

  has_many :bookmarks, foreign_key: :post_uuid
  has_many :bookmarking_users, through: :bookmarks, source: :user

  before_create do
    self.uuid = SecureRandom.uuid
  end

  self.primary_key = "uuid"

  scope :published, lambda { where.not(first_published_at: nil) }

  def to_param
    uuid
  end

  def published?
    first_published_at.present?
  end

  def publish_or_update_content!
    update!(first_published_at: Time.zone.now) unless published?
    update!(content: content_draft)
  end
end
