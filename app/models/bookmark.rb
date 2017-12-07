class Bookmark < ApplicationRecord
  belongs_to :user
  belongs_to :post, foreign_key: :post_uuid, counter_cache: :bookmarked_count
  has_one :notification, as: :notificatable, dependent: :destroy

  after_create do
    unless user == post.user
      n = build_notification
      n.user = post.user
      n.save!
    end
  end
end
