class Clap < ApplicationRecord
  belongs_to :user
  belongs_to :post, foreign_key: :post_uuid

  def countup!
    ActiveRecord::Base.transaction do
      increment!(:count)
      post.increment!(:claps_count)
    end
  end
end
