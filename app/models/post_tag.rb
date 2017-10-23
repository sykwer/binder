class PostTag < ApplicationRecord
  belongs_to :tag
  belongs_to :post, foreign_key: :post_uuid
end
