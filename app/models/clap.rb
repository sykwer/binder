class Clap < ApplicationRecord
  belongs_to :user
  belongs_to :post, foreign_key: :post_uuid

  validate :user_must_not_self_clap

  def countup!
    ActiveRecord::Base.transaction do
      increment!(:count)
      post.increment!(:claps_count)
    end
  end

  private

  def user_must_not_self_clap
    return if user != post.user
    errors.add(:clap, "must not be from post owner")
  end
end
