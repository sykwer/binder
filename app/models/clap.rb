class Clap < ApplicationRecord
  belongs_to :user
  belongs_to :post, foreign_key: :post_uuid
  has_one :notification, as: :notificatable, dependent: :destroy

  validate :user_must_not_self_clap

  after_create do
    n = build_notification
    n.user = post.user
    n.save!
  end

  def countup!
    ActiveRecord::Base.transaction do
      increment!(:count)
      post.increment!(:claps_count)
      notification.unread!
    end
  end

  private

  def user_must_not_self_clap
    return if user != post.user
    errors.add(:clap, "must not be from post owner")
  end
end
