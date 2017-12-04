class Follow < ApplicationRecord
  belongs_to :source, class_name: "User", counter_cache: :followings_count
  belongs_to :destination, class_name: "User", counter_cache: :followers_count
  has_one :notification, as: :notificatable, dependent: :destroy

  after_create do
    n = build_notification
    n.user = destination
    n.save!
  end
end
