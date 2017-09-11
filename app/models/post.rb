class Post < ApplicationRecord
  belongs_to :user

  before_create do
    self.uuid = SecureRandom.uuid
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
  end
end
