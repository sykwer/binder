class Bookmark < ApplicationRecord
  belongs_to :user
  belongs_to :post, foreign_key: :post_uuid, counter_cache: :bookmarked_count
end
