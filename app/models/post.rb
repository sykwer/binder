class Post < ApplicationRecord
  belongs_to :user

  before_create do
    self.uuid = SecureRandom.uuid
  end

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
